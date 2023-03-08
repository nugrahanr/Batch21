class Vehicle {
    constructor(
      public NoPolice: string,
      public VehicleType: string,
      public Year: number,
      public Price: number,
      public Tax: number,
      public Seat: number,
      public TransactionDate: string,
      public Rent?: number,
      public Driver?: number,
      public Order?: number,
      public OrderPerKM?: number,
      public Total?: number,
    ) {}

    public getInfo(): any {
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
        };
      }
  
    public getPrice(): any {
        const rentPrice = this.Rent || 0;
        const driverPrice = this.Driver || 0;
        const orderPrice = this.Order || 0;
        const orderPerKmPrice = this.OrderPerKM || 0;
    
        const Total = rentPrice + driverPrice + orderPrice * orderPerKmPrice;
        return Total;
      }
      
      class SUV extends Vehicle {
        constructor(
            public NoPolice: string,
            public VehicleType: string,
            public Year: number,
            public Price: number,
            public Tax: number,
            public Seat: number,
            public TransactionDate: string,
            public Rent?: number,
            public Driver?: number,
            public Order?: number,
            public OrderPerKM?: number,
            public Total?: number
        ) {
          super(NoPolice, "SUV", Year, Price, Tax, Seat, TransactionDate, Rent, Driver, Order, OrderPerKM);
        }
      }
      
      class Taxi extends Vehicle {
        constructor(
            public NoPolice: string,
            public VehicleType: string,
            public Year: number,
            public Price: number,
            public Tax: number,
            public Seat: number,
            public TransactionDate: string,
            public Rent?: number,
            public Driver?: number,
            public Order?: number,
            public OrderPerKM?: number,
            public Total: number = 0
        ) {
          super(NoPolice, "Taxi", Year, Price, Tax, Seat, TransactionDate, Rent, Driver, Order, OrderPerKM);
        }
      }
      
      class PrivateJet extends Vehicle {
        constructor(
            public NoPolice: string,
            public VehicleType: string,
            public Year: number,
            public Price: number,
            public Tax: number,
            public Seat: number,
            public TransactionDate: string,
            public Rent?: number,
            public Driver?: number,
            public Order?: number,
            public OrderPerKM?: number,
            public Total: number = 0
        ) {
          super(NoPolice, "PrivateJet", Year, Price, Tax, Seat, TransactionDate, Rent, Driver, Order, OrderPerKM);
        }
      }

  interface InfoSummary {
    GetTotalVehicleByType(type: string): number;
    GetTotalVehicle(type: string): number;
    GetTotalIncomeVehicle(): number;
    GetTotalIncomeVehicleByType(type: string): number;
  }
  
  class Rental implements InfoSummary {
    private vehicles: Vehicle[] = [];
  
    constructor(vehicles: Vehicle[]) {
      this.vehicles = vehicles;
    }
  
    public GetTotalVehicle(): number {
      return this.vehicles.length;
    }
  
    public GetTotalVehicleByType(type: string): number {
      return this.vehicles.filter((vehicle) => vehicle.VehicleType === type).length;
    }
  
    public GetTotalIncomeVehicle(): number {
      return this.vehicles.reduce((total, vehicle) => total + vehicle.Total!, 0);
    }
  
    public GetTotalIncomeVehicleByType(type: string): number {
      return this.vehicles.filter((vehicle) => vehicle.VehicleType === type).reduce((total, vehicle) => total + vehicle.Total!, 0);
    }
  }

  //

  const vehicles: Vehicle[] = [
    new SUV("D 1001 UM", "SUV", 2010, 350000000, 3500000, 4, "10/01/2023", 500000, 150000),
    new SUV("D 1002 UM", "SUV", 2010, 350000000, 3500000, 4, "10/01/2023", 500000, 150000),
    new SUV("D 1003 UM", "SUV", 2015, 350000000, 3500000, 5, "12/01/2023", 500000, 150000),
    new SUV("D 1004 UM", "SUV", 2015, 350000000, 3500000, 5, "13/01/2023", 500000, 150000),
    new Taxi("D 11 UK", "Taxi", 2002, 175000000, 1750000, 4, "12/01/2023", 0, 0, 45, 4500),
    new Taxi("D 12 UK", "Taxi", 2015, 225000000, 2250000, 4, "13/01/2023", 0, 0, 75, 4500),
    new Taxi("D 13 UK", "Taxi", 2020, 275000000, 2750000, 4, "13/01/2023", 0, 0, 90, 4500),
    new PrivateJet("ID8089", "PrivateJet", 2015, 150000000000, 1500000000, 12, "23/12/2022", 3500000, 15000000),
    new PrivateJet("ID8099", "PrivateJet", 2018, 175000000000, 1750000000, 15, "25/12/2022", 5500000, 25000000)
    ];
    
    const rental = new Rental(vehicles);

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

// | GetTotalIncomeVehicle(SUV)		    |	NaN	|
// mungkin ada kesalahan hitung jumlah, atau berhubungan dgn kesalahan variabel
// | GetTotalIncomeVehicle(Taxi)		|	0	|
// mungkin salah rumus hitung atau salah cek kendaraan
// | GetTotalIncomeVehicle(PrivateJet)	|	0	|
// mungkin kesalahan hitung
// | GetTotalIncomeVehicle()		    |	NaN	|
// mungkin ada kesalahan hitung jumlah, atau berhubungan dgn kesalahan variabel

