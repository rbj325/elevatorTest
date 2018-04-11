function simulation(num_elevators, num_floors) {
    this.num_elevators = (num_elevators || num_floors < 1) || 1;
    this.num_floors = (num_floors || num_floors < 1) || 1;

    this.elevator_controller = new elevator_controller(this.num_elevators, this.num_floors);

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
        // Report when doors close
    }

    this.next_floor = function () {
        // Confirm we are not on the top floor or bottom floor
        // Report when moving from floor to floor
        this.num_floors += 1;

    }

    this.end_trip = function () {
        // Report when doors open
        this.number_of_trips += 1;
    }
}

function elevator_controller(num_elevators, num_floors) {
    // TODO: init elevators
    this.elevators = [];

    this.find_best_elevator = function (desired_floor) {
        var possible_elevators = this.elevators.filter(e => (e.current_floor > desired_floor && !e.going_up && !e.stopped)
            || (e.current_floor < desired_floor && e.going_up && !e.stopped) || !e.occupied);
        var best_elevator;
        var lowest_distance = num_floors;
        for (var index = 0; index < this.possible_elevators.length; index++) {
            var elevator = possible_elevators[index];
            var distance_from_floor = this.calculate_distance(desired_floor, elevator);
            if (distance_from_floor < lowest_distance) {
                lowest_distance = distance_from_floor;
                best_elevator = elevator;
            }
        }
    }

    // this returns an integer based on how likely this elevator 
    // is going to be the best fit to answer the request
    this.calculate_distance = function (requested_floor, elevator) {
        // if the elevator is occupied add one distance
        var occupied_buffer = elevator.occupied ? 1 : 0;

        return requested_floor >= elevator.current_floor ? requested_floor + occupied_buffer - elevator.current_floor :
            elevator.current_floor - requested_floor + occupied_buffer;
    }

    this.dispatch_elevator = function (elevator, floor) {

    }
}