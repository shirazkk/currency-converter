#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk"
 let welcomeMessage="Welcome To Our Currency Converter App"
console.log("\n"+"\t"+ chalk.bold.italic.yellowBright(welcomeMessage)+"\n"+"\t");

        
async function againconvert(){    

const currencies:any={
    USD:1,
    EUR:0.94,
    GBP:0.76,
    INR:74.57,
    PKR:280,
    AUD:1.56,
    CNY:7.24,
    EGP:48.35,
    IRR:42075.00

}

let currency=await inquirer.prompt(
    [
        {
            name:"fromcurrency",
            type:"list",
            message:"select your from currency",
            choices:["USD","EUR","GBP","INR","PKR","AUD","CNY","EGP","IRR"]
        },

        {   
            name:"tocurrency",
            type:"list",
            message:"select your to currency",
            choices:["USD","EUR","GBP","INR","PKR","AUD","CNY","EGP","IRR"]
        },

        {
            name:"amount",
            type:"number",
            message:"Enter your amount",
            
        }

    ]
)


let fromamount=currencies[currency.fromcurrency];
let toamount=currencies[currency.tocurrency];
let amounts=currency.amount
let conversion=amounts/fromamount;
let converted=conversion*toamount;



console.log(`Your ${chalk.redBright(currency.amount)} ${currency.fromcurrency} in ${currency.tocurrency} is ${chalk.redBright(converted.toFixed(2))} `);


let again=await inquirer.prompt(
    [
        {
            name:"repeat",
            type:"confirm",
            message:"Do You Want To Perform Again?"
        }
    ]
)
if(again.repeat){
    return againconvert()
}
else{
    console.log(chalk.bold.italic.yellowBright("Thanks for using our app"));

}
}
againconvert()
