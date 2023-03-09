"use strict";
class Vehicle {
    constructor(NoPolice, //public agar bisa diakses di luar kelas
    VehicleType, Year, Price, Tax, Seat, TransactionDate, Rent, Driver, Order, OrderPerKM, Total) {
        this.NoPolice = NoPolice;
        this.VehicleType = VehicleType;
        this.Year = Year;
        this.Price = Price;
        this.Tax = Tax;
        this.Seat = Seat;
        this.TransactionDate = TransactionDate;
        this.Rent = Rent;
        this.Driver = Driver;
        this.Order = Order;
        this.OrderPerKM = OrderPerKM;
        this.Total = Total;
    }
    //method getinfo
    getInfo() {
        return {
            NoPolice: this.NoPolice,
            VehicleType: this.VehicleType,
            Year: this.Year,
            Price: this.Price,
            Tax: this.Tax,
            Seat: this.Seat,
            TransactionDate: this.TransactionDate,
            Rent: this.Rent,
            Driver: this.Driver,
            Order: this.Order,
            OrderPerKM: this.OrderPerKM,
            Total: this.Total,
        };
    }
    //hitung harga
    getPrice() {
        const rentPrice = this.Rent || 0; //jika objek tdk ada, diisi 0
        const driverPrice = this.Driver || 0;
        const orderPrice = this.Order || 0;
        const orderPerKmPrice = this.OrderPerKM || 0;
        const Total = rentPrice + driverPrice + orderPrice * orderPerKmPrice; //hitung total
        return Total;
    }
}
class SUV extends Vehicle {
    constructor(NoPolice, VehicleType, Year, Price, Tax, Seat, TransactionDate, Rent, Driver, Order, OrderPerKM, Total) {
        super(NoPolice, "SUV", Year, Price, Tax, Seat, TransactionDate, Rent, Driver, Order, OrderPerKM, Total);
        this.NoPolice = NoPolice;
        this.VehicleType = VehicleType;
        this.Year = Year;
        this.Price = Price;
        this.Tax = Tax;
        this.Seat = Seat;
        this.TransactionDate = TransactionDate;
        this.Rent = Rent;
        this.Driver = Driver;
        this.Order = Order;
        this.OrderPerKM = OrderPerKM;
        this.Total = Total;
    } //panggil constructor dr kelas Vehicle. nilainya diset pd properti objek suv
}
class Taxi extends Vehicle {
    constructor(NoPolice, VehicleType, Year, Price, Tax, Seat, TransactionDate, Rent, Driver, Order, OrderPerKM, Total) {
        super(NoPolice, "Taxi", Year, Price, Tax, Seat, TransactionDate, Rent, Driver, Order, OrderPerKM, Total);
        this.NoPolice = NoPolice;
        this.VehicleType = VehicleType;
        this.Year = Year;
        this.Price = Price;
        this.Tax = Tax;
        this.Seat = Seat;
        this.TransactionDate = TransactionDate;
        this.Rent = Rent;
        this.Driver = Driver;
        this.Order = Order;
        this.OrderPerKM = OrderPerKM;
        this.Total = Total;
    }
}
class PrivateJet extends Vehicle {
    constructor(NoPolice, VehicleType, Year, Price, Tax, Seat, TransactionDate, Rent, Driver, Order, OrderPerKM, Total) {
        super(NoPolice, "PrivateJet", Year, Price, Tax, Seat, TransactionDate, Rent, Driver, Order, OrderPerKM, Total);
        this.NoPolice = NoPolice;
        this.VehicleType = VehicleType;
        this.Year = Year;
        this.Price = Price;
        this.Tax = Tax;
        this.Seat = Seat;
        this.TransactionDate = TransactionDate;
        this.Rent = Rent;
        this.Driver = Driver;
        this.Order = Order;
        this.OrderPerKM = OrderPerKM;
        this.Total = Total;
    }
}
class Rental {
    constructor(vehicles) {
        this.vehicles = []; //isinya objek dari vehicle
        this.vehicles = vehicles; //beri parameter vehicles ke properti vehicles
    }
    GetTotalVehicle() {
        return this.vehicles.length;
    }
    GetTotalVehicleByType(type) {
        return this.vehicles.filter((vehicle) => vehicle.VehicleType === type).length;
    }
    //   public GetTotalIncomeVehicle(type?: string): number {
    //     return this.vehicles.reduce((total, vehicle) => total + vehicle.Total!, 0);
    // }
    // public GetTotalIncomeVehicleByType(type?: string): number {
    //   return this.vehicles.filter((vehicle) => vehicle.VehicleType === type).reduce((total, vehicle) => total + vehicle.Total!, 0);
    // }
    //}
    GetTotalIncomeVehicleByType(type) {
        const filteredVehicles = this.vehicles.filter((vehicle) => vehicle.VehicleType === type && typeof vehicle.Total === 'number');
        const totalIncome = filteredVehicles.reduce((total, vehicle) => {
            return total + vehicle.Total;
        }, 0);
        return totalIncome || 0;
    }
    GetTotalIncomeVehicle() {
        const allTypes = this.vehicles.map(vehicle => vehicle.VehicleType); // array yang berisi semua tipe kendaraan
        const uniqueTypes = [...new Set(allTypes)]; // array yang berisi tipe kendaraan unik
        const totalIncome = uniqueTypes.reduce((total, type) => {
            const typeIncome = this.GetTotalIncomeVehicleByType(type);
            return total + typeIncome;
        }, 0);
        return totalIncome;
    }
}
//
const vehicles = [
    new SUV("D 1001 UM", "SUV", 2010, 350000000, 3500000, 4, "10/01/2023", 500000, 150000, 0, 0, 650000),
    new SUV("D 1002 UM", "SUV", 2010, 350000000, 3500000, 4, "10/01/2023", 500000, 150000, 0, 0, 650000),
    new SUV("D 1003 UM", "SUV", 2015, 350000000, 3500000, 5, "12/01/2023", 500000, 150000, 0, 0, 650000),
    new SUV("D 1004 UM", "SUV", 2015, 350000000, 3500000, 5, "13/01/2023", 500000, 150000, 0, 0, 650000),
    new Taxi("D 11 UK", "Taxi", 2002, 175000000, 1750000, 4, "12/01/2023", 0, 0, 45, 4500, 202500),
    new Taxi("D 12 UK", "Taxi", 2015, 225000000, 2250000, 4, "13/01/2023", 0, 0, 75, 4500, 337500),
    new Taxi("D 13 UK", "Taxi", 2020, 275000000, 2750000, 4, "13/01/2023", 0, 0, 90, 4500, 405000),
    new PrivateJet("ID8089", "PrivateJet", 2015, 150000000000, 1500000000, 12, "23/12/2022", 3500000, 15000000, 0, 0, 50000000),
    new PrivateJet("ID8099", "PrivateJet", 2018, 175000000000, 1750000000, 15, "25/12/2022", 5500000, 25000000, 0, 0, 80000000)
];
const rental = new Rental(vehicles); //akses total kendaraan dan income, mengambil dari array di atas
console.log(`
----------------------------------------------------------------
|					InfoSummary		|
----------------------------------------------------------------
| Interface Method   			|	Return Value	|
----------------------------------------------------------------
| GetTotalVehicle()			|	${rental.GetTotalVehicle().toLocaleString()}	|
| GetTotalVehicle(SUV)			|	${rental.GetTotalVehicleByType('SUV').toLocaleString()}	|
| GetTotalIncomeVehicle(SUV)		|	${rental.GetTotalIncomeVehicleByType('SUV').toLocaleString()}	|
| GetTotalIncomeVehicle(Taxi)		|	${rental.GetTotalIncomeVehicleByType('Taxi').toLocaleString()}	|
| GetTotalIncomeVehicle(PrivateJet)	|	${rental.GetTotalIncomeVehicleByType('PrivateJet').toLocaleString()}	|
| GetTotalIncomeVehicle()		|	${rental.GetTotalIncomeVehicle().toLocaleString()}	|
----------------------------------------------------------------
`);
//# sourceMappingURL=JuraganMobil.js.map