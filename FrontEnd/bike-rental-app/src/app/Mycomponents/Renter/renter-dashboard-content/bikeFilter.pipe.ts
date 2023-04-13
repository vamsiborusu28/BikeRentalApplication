import { Pipe, PipeTransform } from "@angular/core";
import { Config } from "src/app/config";


@Pipe({
    name:'BikeFilter'
})

export class bikeFilterPipe implements PipeTransform{
    transform(bike: Config['BikeObj'][], SearchValue: string):Config['BikeObj'][] {
        if(!bike || !SearchValue){
            return bike;
        }
        return bike.filter(bikes =>
            bikes.brandName.toLowerCase().indexOf(SearchValue.toLowerCase()) !== -1 || 
            bikes.modelName.toLowerCase().indexOf(SearchValue.toLowerCase()) !== -1  ||
            bikes.bikeNumber.toLowerCase().indexOf(SearchValue.toLowerCase())!== -1
            );
    }
}