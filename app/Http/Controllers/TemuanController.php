<?php

namespace App\Http\Controllers;

use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class TemuanController extends Controller
{
    public function index(Request $request): Response
    {
        return Inertia::render('Temuan');
    }
}