function simulation(num_elevators, num_floors) {
    this.num_elevators = (num_elevators || num_floors < 1) || 1;
    this.num_floors = (num_floors || num_floors < 1) || 1;

    this.elevator_controller = new elevator_controller(this.num_elevators);

    this.request_elevator = function (floor) {

    }
}

function elevator(id) {
    this.id = id;
    this.current_floor = 1;
    this.desired_floor = 1;
    this.door_closed = true;
    this.going_up = true;
    this.occupied = false;
    this.stopped = true;
    this.number_of_trips = 0;
    this.number_of_floors_passed = 0;
    this.trips_until_maintenance = 100;

    this.start_trip = function (desired_floor) {
        this.desired_floor = desired_floor;
    }

    this.next_floor = function () {
        // Confirm we are not on the top floor or bottom floor
        // Report when moving from floor to floor
        this.num_floors += 1;
        // Report when doors open or close
    }

    this.end_trip = function () {
        this.number_of_trips += 1;
    }
}

function elevator_controller(num_elevators) {
    // TODO: init elevators
    this.elevators = [];

    this.find_best_elevator = function (floor) {

    }
    this.dispatch_elevator = function (elevator, floor) {

    }
}