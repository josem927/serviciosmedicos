<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Illuminate\Support\Facades\Log; // Importa la fachada Log
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

        // dd($request->profile_image);
        $request->validate([
<<<<<<< HEAD
            // 'name' => 'required|string|max:255',
            // 'phone' => 'required|string|max:255',
            // 'email' => 'required|string|email|max:255|unique:users,email',
            // 'password' => ['required', 'confirmed', Rules\Password::defaults()],
            // 'professional_id' => 'required|string|max:255',
            // 'userType' => 'required|string|max:255',
            // 'ubicacion' => 'nullable|string|max:255',
            // 'name_doctor' => 'nullable|string|max:255',
            'profile_image' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048', 
=======
            'name' => 'required|string|max:255',
            'phone' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users,email',
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
            'professional_id' => 'required|string|max:255',
            'userType' => 'required|string|max:255',
            'ubicacion' => 'nullable|string|max:255',
            'name_doctor' => 'nullable|string|max:255',
            'profile_image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048', 
>>>>>>> de4d524e8dcb0d985a274b0dd097a92e5c79d609
        ]);
        // dd('dasdasd');

<<<<<<< HEAD

        try {
            $user = User::create([
            ]);

=======
        try {
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

>>>>>>> de4d524e8dcb0d985a274b0dd097a92e5c79d609
            if ($request->hasFile('profile_image')) {
                dd('test');
                $imagePath = $request->file('profile_image')->store('images', 'public');
                $user->profile_image = 'images/' . basename($imagePath);
                $user->save();
            
                Log::info('Ruta de imagen almacenada en la base de datos: ' . $user->profile_image);
            }

            event(new Registered($user));

            Auth::login($user);

            Log::info('Usuario registrado correctamente.');

            return redirect()->route('dashboard');
        } catch (\Exception $e) {
            Log::error('Error durante el registro del usuario: ' . $e->getMessage());

            return redirect()->route('register')->with('error', 'Hubo un error durante el registro.');
        }
    }
}