function simulation(num_elevators, num_floors) {
    this.num_elevators = (num_elevators || num_floors < 1) || 1;
    this.num_floors = (num_floors || num_floors < 1) || 1;

    this.request_elevator = function (floor) {

    }
}
function elevator() {
    this.current_floor = 1;
    this.door_closed = true;
    this.occupied = false;
    this.stopped = true;
    this.number_of_trips = 0;
    this.number_of_floors_passed = 0;
    this.trips_until_maintenance = 100;
    

    this.next_floor = function () {
        // Confirm we are not on the top floor or bottom floor
    }
}
