// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract CarOwnership {
    struct Car {
        string make;
        string model;
        uint256 year;
        address owner;
    }

    struct Owner {
        string name;
        address owner;
    }

    mapping(uint256 => Car) public cars;
    mapping(address => Owner) public owners;
    uint256 public totalCars;

    event CarAdded(
        uint256 carId,
        string make,
        string model,
        uint256 year,
        address owner
    );

    event OwnerAdded(address owner, string name);

    function addCar(
        string memory _make,
        string memory _model,
        uint256 _year,
        address _owner
    ) public {
        totalCars++;
        cars[totalCars] = Car(_make, _model, _year, _owner);
        emit CarAdded(totalCars, _make, _model, _year, _owner);
    }

    function addOwner(string memory _name, address _owner) public {
        owners[_owner] = Owner(_name, _owner);
        emit OwnerAdded(_owner, _name);
    }

    function getOwnerCars(
        address _owner
    ) public view returns (uint256[] memory) {
        uint256[] memory ownerCars = new uint256[](totalCars);
        uint256 counter = 0;

        for (uint256 i = 1; i <= totalCars; i++) {
            if (cars[i].owner == _owner) {
                ownerCars[counter] = i;
                counter++;
            }
        }

        // Create a new smaller array to hold the exact number of cars
        uint256[] memory result = new uint256[](counter);
        for (uint256 i = 0; i < counter; i++) {
            result[i] = ownerCars[i];
        }

        return result;
    }

    function changeOwner(uint256 _carId, address _owner) public {
        cars[_carId].owner = _owner;
        emit CarAdded(
            _carId,
            cars[_carId].make,
            cars[_carId].model,
            cars[_carId].year,
            _owner
        );
    }
}
