<?php

namespace App\Http\Controllers\Admin;

use Inertia\Inertia;
use App\Models\Admin;
use Illuminate\Http\Request;
use Spatie\Permission\Models\Role;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use Yajra\DataTables\Facades\DataTables;
use Illuminate\Routing\Controllers\Middleware;
use Illuminate\Routing\Controllers\HasMiddleware;

class AdminManageController extends Controller implements HasMiddleware
{ 
    public static function middleware() : array {
        return [
            new Middleware('permission:view admins,admin', only : ['index']),
            new Middleware('permission:create admins,admin', only : ['create','store']),
            new Middleware('permission:edit admins,admin', only : ['edit']),
            new Middleware('permission:delete admins,admin', only : ['delete']),
        ];
    }
    public function index() {
        $data['pageName'] = 'Admins';
        return Inertia::render('Admins/List',$data);
    }

    public function create() {
        $data['pageName'] = 'Admin';
        $data['roles'] = Role::select(['id','name'])->get();
        return Inertia::render('Admins/Create',$data);
    }

    public function getData()
    {
        $data = Admin::select(['id', 'firstname', 'lastname', 'email'])->orderByDesc('id');

        
        return DataTables::of($data)
            ->addIndexColumn()
            ->addColumn('action', function ($row) {
                return '

                <button href="' . route('admins.edit', $row->id) . '" class="text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white/90 edit-link">
                    <svg class="fill-current" width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M17.0911 3.53206C16.2124 2.65338 14.7878 2.65338 13.9091 3.53206L5.6074 11.8337C5.29899 12.1421 5.08687 12.5335 4.99684 12.9603L4.26177 16.445C4.20943 16.6931 4.286 16.9508 4.46529 17.1301C4.64458 17.3094 4.90232 17.3859 5.15042 17.3336L8.63507 16.5985C9.06184 16.5085 9.45324 16.2964 9.76165 15.988L18.0633 7.68631C18.942 6.80763 18.942 5.38301 18.0633 4.50433L17.0911 3.53206ZM14.9697 4.59272C15.2626 4.29982 15.7375 4.29982 16.0304 4.59272L17.0027 5.56499C17.2956 5.85788 17.2956 6.33276 17.0027 6.62565L16.1043 7.52402L14.0714 5.49109L14.9697 4.59272ZM13.0107 6.55175L6.66806 12.8944C6.56526 12.9972 6.49455 13.1277 6.46454 13.2699L5.96704 15.6283L8.32547 15.1308C8.46772 15.1008 8.59819 15.0301 8.70099 14.9273L15.0436 8.58468L13.0107 6.55175Z" fill="" />
                    </svg>
                </button>

                <button data-route="admins.destroy" class="text-gray-500 hover:text-error-500 dark:text-gray-400 dark:hover:text-error-500 delete-record" data-id="'.$row->id.'">
                    <svg class="fill-current" width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg" >
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.04142 4.29199C7.04142 3.04935 8.04878 2.04199 9.29142 2.04199H11.7081C12.9507 2.04199 13.9581 3.04935 13.9581 4.29199V4.54199H16.1252H17.166C17.5802 4.54199 17.916 4.87778 17.916 5.29199C17.916 5.70621 17.5802 6.04199 17.166 6.04199H16.8752V8.74687V13.7469V16.7087C16.8752 17.9513 15.8678 18.9587 14.6252 18.9587H6.37516C5.13252 18.9587 4.12516 17.9513 4.12516 16.7087V13.7469V8.74687V6.04199H3.8335C3.41928 6.04199 3.0835 5.70621 3.0835 5.29199C3.0835 4.87778 3.41928 4.54199 3.8335 4.54199H4.87516H7.04142V4.29199ZM15.3752 13.7469V8.74687V6.04199H13.9581H13.2081H7.79142H7.04142H5.62516V8.74687V13.7469V16.7087C5.62516 17.1229 5.96095 17.4587 6.37516 17.4587H14.6252C15.0394 17.4587 15.3752 17.1229 15.3752 16.7087V13.7469ZM8.54142 4.54199H12.4581V4.29199C12.4581 3.87778 12.1223 3.54199 11.7081 3.54199H9.29142C8.87721 3.54199 8.54142 3.87778 8.54142 4.29199V4.54199ZM8.8335 8.50033C9.24771 8.50033 9.5835 8.83611 9.5835 9.25033V14.2503C9.5835 14.6645 9.24771 15.0003 8.8335 15.0003C8.41928 15.0003 8.0835 14.6645 8.0835 14.2503V9.25033C8.0835 8.83611 8.41928 8.50033 8.8335 8.50033ZM12.9168 9.25033C12.9168 8.83611 12.581 8.50033 12.1668 8.50033C11.7526 8.50033 11.4168 8.83611 11.4168 9.25033V14.2503C11.4168 14.6645 11.7526 15.0003 12.1668 15.0003C12.581 15.0003 12.9168 14.6645 12.9168 14.2503V9.25033Z"fill=""/>
                    </svg>
                </button>
                ';
            })

            ->addColumn('role', function ($row) {
                if ($row->roles->isEmpty()) {
                    return '<span class="inline-flex items-center justify-center gap-1 rounded-full bg-gray-400 px-2.5 py-0.5 text-sm font-medium text-white dark:bg-white/5 dark:text-white/80">No Roles</span>';
                }
            
                $rolesBadges = $row->roles->map(function ($role) {
                    return '<span class="inline-flex items-center justify-center gap-1 rounded-full bg-blue-light-500 px-2.5 py-0.5 text-sm font-medium text-white">' . $role->name . '</span> ';
                })->implode('');
                
                return $rolesBadges;
            })
            ->rawColumns(['action','role'])
            ->make(true);
    }


    public function store(Request $request)
    {
        $validate = $request->validate([
            'firstname' => 'required|min:3',
            'lastname' => 'required|min:3',
            'email' => 'required|email|unique:admins,email',
            'password' => 'required|min:8',
        ]);
        try {
            $validate['password'] = Hash::make($validate['password']);
            $admin = Admin::create($validate);
            $admin->syncRoles($request->roles ? : []);

            return redirect()->route('admins.index')->with('success', 'Admin created successfully!');
        } catch (\Throwable $th) {
            return redirect()->back()->with('error', 'Oops! Something went wrong. We`re working on it. Please try again shortly.');
        }
    }


    public function edit(Admin $admin){
        $data['pageName'] = 'Admin';
        $data['admin'] = $admin;
        $data['roles'] = Role::select(['id','name'])->get();
        $data['hasRoles'] = $data['admin']->roles->pluck('name');
        return Inertia::render('Admins/Create',$data);
    }

    public function update(Request $request, Admin $admin)
    {
        $validate = $request->validate([
            'firstname' => 'required|min:3',
            'lastname'  => 'required|min:3',
            'email'     => 'required|email|unique:admins,email,' . $admin->id,
            'password'  => 'nullable|min:8',
        ]);
       
        if (!empty($validate['password'])) {
            $validate['password'] = Hash::make($validate['password']);
        } else {
            unset($validate['password']);
        }

        try {
            $admin->update($validate);
            $admin->syncRoles($request->roles ? : []);
            return redirect()
                ->route('admins.index')
                ->with('success', 'Admin updated successfully!');
        } catch (\Throwable $th) {
            return redirect()
                ->back()
                ->with('error', 'Something went wrong while updating the admin. Please try again.');
        }
    }
    
    public function destroy($id)
    {
        try {
            $user = Admin::findOrFail($id);
            $user->delete();

            return redirect()->route('admins.index')->with('success', 'Admin deleted successfully!');
        } catch (\Throwable $th) {
            return redirect()->back()->with('error', 'Something went wrong while deleting the admin.');
        }
    }

}
