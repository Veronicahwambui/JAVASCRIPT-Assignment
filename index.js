class Mkulima{
    constructor(){
     this. product=[];
     this. vendors=[];
     this. farm=[];
    }



 addFarm(farmerId,farmerName,phoneNumber,address ,farmName){
  
    var name={
        farmerId:farmerId,
        farmerName:farmerName,
        phoneNumber:phoneNumber,
        address:address,
        farmName:farmName

    }

     this.farm.push(name);
     return this.farm

    }
removeFarm(farmerId){
 return this.farm.unshift(farmerId);

}

updateFarm(farmerId,farmerName,phoneNumber,address,farmName){
    let newfarm=this.farm.find(newfarm=>newfarm.address==3960)
     newfarm={
         farmerId:farmerId,
         farmerName:farmerName,
         phoneNumber:phoneNumber,
         address:address,
         farmName:farmName
}

return newfarm
 }

getFarm(farmerId,farmername,phoneNumber,address,farmName){
    let farm3=this.farm.find(newfarm=>newfarm.farmerId==4456789)
   return farm3
   
}

addProduct(Id,name,price){
 var product={
     Id:Id,
     name:name,
     price:price
 }

     this.product.push(product); 
     return this.product
}
removeProduct(Id){


 this.product.unshift(Id);
 return this.product
   }
   updateProduct(Id,name,price){
    let newproduct=this.product.find(newproduct=>newproduct.name=="spicanch")
     newproduct={
        Id:Id,
        name:name,
        price:price
       
}
return  newproduct

   }
getProduct(Id,name,price){
 
 let product=this.product.find(newproduct=>newproduct.Id==8906543)
   return product
   
}
printProduct(){
    for (let item of this.product){
        console.log(`${item.name},${item.price}`)
    }
    

}
calculateOrderCost(Id,quantity){
    var cost=this.product.find(cost=>cost.Id==Id)
    return cost.price*quantity


}

}
 let mkulima = new Mkulima([],[],[]);
 console.log(mkulima.addFarm(3456789,"jane","0756433455","7890","shamba"));
 console.log(mkulima.addFarm(5567896,"sofia","0756433455","5290","kembu"));
 console.log(mkulima.addFarm(4456789,"eric","0756433455","4490","mzungu"));
 console.log(mkulima.addFarm(2456789,"john","0756433455","3660","njoro"));
 console.log(mkulima.removeFarm(3456789));
 console.log(mkulima.updateFarm(3456457," Ann","073458966","6797","mhindi"));
 console.log(mkulima.getFarm(4456789));
 console.log(mkulima.addProduct(3244566,"cabbage",600));
 console.log(mkulima.addProduct(6677778,"carrot",800));
 console.log(mkulima.addProduct(8906543,"spinach",1000));
 console.log(mkulima.removeProduct(3244566,));
 console.log(mkulima.updateProduct(7899999,"tomatoes",1000));
 console.log(mkulima.getProduct(6677778));
 mkulima.printProduct()
 console.log(mkulima.calculateOrderCost(3244566,12));
 
 
