<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Str;

class TicketController extends Controller
{
    public function HomePage()
    {
       return inertia('Home');
    }

    public function DetailPage($id)
    {
        $idEvent = $id;
        $route_next_url = route('checkout');
        return inertia('Detail', [
            'route_next_url' => $route_next_url,
            'idEvent'=> $idEvent
       ]);
    }

    public function CheckoutPage(Request $request) {
        $nextPage = route('payment-method');
        $name = $request->name;
        $email = $request->email;
        $phone_numbers = $request->phone_number;
        $event = $request->event;
        $uuid = Str::uuid()->toString();
        $ip_address = $request->ip();

        return inertia('Checkout', [
            'nextPage' => $nextPage,
            'name' => $name,
            'email' => $email,
            'phone_numbers' => $phone_numbers,
            'uuid' => $uuid,
            'ip_address' => $ip_address,
            'event' => $event
        ]);
    }

    public function PaymentMethod() {
        $beforePage =  route('checkout');
        return inertia('Payment-method', [
            'beforePage' => $beforePage,
        ]);
    }

    public function Payment(Request $request) {
        $beforePage =  route('checkout');
        $nextPage = route('payment-finish');
        $generate = $request->generate;
        $paymenttype = $request->paymenttype;

        return inertia('Payment', [
            'beforePage' => $beforePage,
            'generate' => $generate,
            'paymenttype' => $paymenttype,
            'nextPage' => $nextPage
        ]);
    }

    public function ThankyouPage() {
        return inertia('Finish');
    }
}
