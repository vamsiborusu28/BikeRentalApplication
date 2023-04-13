export class Config {
    Login={
        email:"",
        password:""
        
    }
    
    userRole={
        userType:""
    }

    Signup={
        email:"",
        password:"",
        mobileNumber:"",
        userName:"",
        gender:"",
        userRole:"",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNSAUZ37P2k0ugD36-kOgGrAjK6gLMWKXnyw&usqp=CAU",
        address:"",
        earnings!:0,
        isActive!:"true"
    }

    CustomerObj={
        id:0,
        email:"",
        password:"",
        mobileNumber:"",
        userName:"",
        gender:"",
        userRole:"",
        image:"",
        address:"",
        isActive!:"true" 
    }
    RenterObj={
        id:0,
        email:"",
        password:"",
        mobileNumber:"",
        userName:"",
        gender:"",
        userRole:"",
        image:"",
        address:"",
        earnings:0,
        isActive!:"true"
    }

    BikeObj={
        id:0,
        brandName:"",
        modelName:"",
        bikeNumber:"",
        bikeImage:"",
        description:"",
        rentAmount:"",
        pickUpLocation:"",
        availability:"",
        ownerName:JSON.parse(localStorage.getItem('userName')!)
    }
    BookingObj={
        bookingId:0,
        totalAmount:0.0,
        bookingDate:"",
        endDate:"",
        renterName:"",
        customerName:JSON.parse(localStorage.getItem('userName')!),
        brandName:"",
        modelName:"",
        bikeId:0
    }
    Comments={
        id:"",
        email:"",
        name:"",
        userRole:JSON.parse(localStorage.getItem('Role')!),
        feedback:"",
    }

    CardDetails={
        name:"",
        cardType:"",
        cardNumber:"",
        cvv:"",
        expiryMM:"",
        expiryYY:""
    }

    OldPasswordObj={
        password:""
    }

  static Login: object;
  static CustomerObj: [];
  static RenterObj: [];
  static BikeObj: [];
  static BookingObj: [];
  static Comments:{};
}
