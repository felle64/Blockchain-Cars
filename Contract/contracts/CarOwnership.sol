// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract CarOwnership {
    struct Car {
        string make;
        string model;
        uint256 year;
        address owner;
        uint256[] transactionIds;
    }

    struct Owner {
        string name;
        address owner;
    }

    struct Transaction {
        uint256 carId;
        address previousOwner;
        address newOwner;
        uint256 timestamp;
    }

    mapping(uint256 => Car) public cars;
    mapping(address => Owner) public owners;
    mapping(uint256 => Transaction) public transactions;
    uint256 public totalCars;
    uint256 public totalTransactions;

    event CarAdded(
        uint256 carId,
        string make,
        string model,
        uint256 year,
        address owner
    );

    event OwnerAdded(address owner, string name);

    event OwnershipTransferred(
        uint256 carId,
        address previousOwner,
        address newOwner
    );

    event TransactionRecorded(
        uint256 transactionId,
        uint256 carId,
        address previousOwner,
        address newOwner,
        uint256 timestamp
    );

    function addCar(
        string memory _make,
        string memory _model,
        uint256 _year,
        address _owner
    ) public {
        totalCars++;
        cars[totalCars] = Car(_make, _model, _year, _owner, new uint256[](0));
        emit CarAdded(totalCars, _make, _model, _year, _owner);
    }

    function addOwner(string memory _name, address _owner) public {
        require(bytes(_name).length > 0, "Owner name cannot be empty");
        owners[_owner] = Owner(_name, _owner);
        emit OwnerAdded(_owner, _name);
    }

    function getOwner(address _owner) public view returns (string memory) {
        Owner memory owner = owners[_owner];
        if (bytes(owner.name).length == 0) {
            return "Owner has not added name yet";
        } else {
            return owner.name;
        }
    }

    function getOwnerCars(
        address _owner
    ) public view returns (uint256[] memory) {
        uint256[] memory ownedCars = new uint256[](totalCars);
        uint256 counter = 0;

        for (uint256 i = 1; i <= totalCars; i++) {
            if (cars[i].owner == _owner) {
                ownedCars[counter] = i;
                counter++;
            }
        }

        uint256[] memory result = new uint256[](counter);
        for (uint256 i = 0; i < counter; i++) {
            result[i] = ownedCars[i];
        }

        return result;
    }

    function changeOwner(uint256 _carId, address _newOwner) public {
        require(_carId <= totalCars, "Invalid car ID");
        require(
            msg.sender == cars[_carId].owner,
            "You are not the current owner of this car"
        );

        address previousOwner = cars[_carId].owner;
        cars[_carId].owner = _newOwner;

        totalTransactions++;
        transactions[totalTransactions] = Transaction({
            carId: _carId,
            previousOwner: previousOwner,
            newOwner: _newOwner,
            timestamp: block.timestamp
        });

        cars[_carId].transactionIds.push(totalTransactions);

        emit OwnershipTransferred(_carId, previousOwner, _newOwner);
        emit TransactionRecorded(
            totalTransactions,
            _carId,
            previousOwner,
            _newOwner,
            block.timestamp
        );
    }

    function getAllTransactions() public view returns (Transaction[] memory) {
        Transaction[] memory allTransactions = new Transaction[](
            totalTransactions
        );

        for (uint256 i = 1; i <= totalTransactions; i++) {
            allTransactions[i - 1] = transactions[i];
        }

        return allTransactions;
    }
}
