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
            'phone' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users,email',
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
            'professional_id' => 'required|string|max:255',
            'userType' => 'required|string|max:255',
            'ubicacion' => 'nullable|string|max:255',
            'name_doctor' => 'nullable|string|max:255',
            'foto_consultorio' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048', // Nueva validación para la foto de perfil
        ]);

        $user = User::create([
            'name' => $request->name,
            'phone' => $request->phone,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'professional_id' => $request->professional_id,
            'userType' => $request->userType,
            'ubicacion' => $request->ubicacion,
            'name_doctor' => $request->name_doctor,
        ]);

        // Manejar la foto de perfil
        if ($request->hasFile('foto_consultorio')) {
            $imagePath = $request->file('foto_consultorio')->store('profile_images', 'public');
            $user->profile_image = $imagePath;
            $user->save();
        }

        event(new Registered($user));

        Auth::login($user);

        return redirect(RouteServiceProvider::HOME);
    }
}
