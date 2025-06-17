<?php

namespace App\Exceptions;

use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Throwable;
use Inertia\Inertia;
use Symfony\Component\HttpKernel\Exception\HttpExceptionInterface;
use Illuminate\Http\Request;

class Handler extends ExceptionHandler
{
    public function render($request, Throwable $e)
    {
        $status = 500;
        $message = $e->getMessage();

        if ($e instanceof HttpExceptionInterface) {
            $status = $e->getStatusCode();
        }

        if (in_array($status, [403, 404]) && $request->header('X-Inertia')) {
            return Inertia::render("Errors/{$status}", [
                'status' => $status,
                'message' => $message,
            ])->toResponse($request)->setStatusCode($status);
        }

        return parent::render($request, $e);
    }
}
