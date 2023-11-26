<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Providers\RouteServiceProvider;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;

class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/Register');
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): RedirectResponse
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'phone' => 'required|string|max:255', // Nuevo campo: Teléfono
            'email' => 'required|string|email|max:255|unique:'.User::class,
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
            'professional_id' => 'required|string|max:255', // Nuevo campo: Cédula Profesional
            'userType' => 'required|string|max:255', // Nuevo campo: Tipo de Usuario
        ]);

        $user = User::create([
            'name' => $request->name,
            'phone' => $request->phone, // Nuevo campo: Teléfono
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'professional_id' => $request->professional_id, // Nuevo campo: Cédula Profesional
            'userType' => $request->userType, // Nuevo campo: Tipo de Usuario
        ]);

        event(new Registered($user));

        Auth::login($user);

        return redirect(RouteServiceProvider::HOME);
    }
}
