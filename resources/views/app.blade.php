@extends('layouts.app')

@section('content')
   {{-- <div class="container-fluid">
        @foreach(range(1,2) as $row)
            <div class="row justify-content-center">
                @foreach(range(0,3) as $item)
                    <div class="col-md-3 col-sm-6 mb-4">
                        <div class="card">
                            <div class="card-header">Dashboard</div>

                            <div class="card-body">
                                <ul>
                                    <li>Data: <b>{{ \Carbon\Carbon::now() }}</b></li>
                                    <li>Local: <b>Rio de Janeiro</b></li>
                                </ul>
                                <div class="text-right"><button class="btn btn-default">Bagagem</button></div>
                            </div>
                        </div>
                    </div>
                @endforeach
            </div>
        @endforeach
    </div>--}}
@endsection
