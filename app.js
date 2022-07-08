//ex 1
let favNum = 7;
let userFavNum = window.prompt("try to guess my favorite number:");

if(userFavNum < favNum)
{
    console.log("too low");
}
else if(userFavNum > favNum)
{
    console.log("too high");
}
else
{
    console.log("Congratulations!");
}


//ex 2
let userInput2 = window.prompt("What is 4 + 4");
switch(userInput2)
{
    case "2":
        console.log("incorrect.")
        break;
        case "4":
            console.log("incorrect.")
            break;
            case "6":
                console.log("no.")
                break;
                case "8":
                    console.log("correct!")
                    break;
                    default:
                        console.log("nah, try again.");
}