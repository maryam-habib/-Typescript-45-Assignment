import { Console } from "console";


let Guest_List :string[] = ['Kamran Khan Tessori','Sir Zia','Daniyal Nagori'];
// for(let i=0; i<Guest_List.length; i++){
//     console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!')
// }
let absent_Guest :string = 'Daniyal Nagori' ;
let new_Guest :string = 'Imran Khan' ;
Guest_List[0] = new_Guest ;
// for(let i=0; i<Guest_List.length; i++){
//     console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!')
// }

    console.log(`Mr. ${absent_Guest} is not coming to the party.`);
    console.log('Good News! We find Big Table So we are inviting 3 more guests.')
    Guest_List.unshift('Zafar Abbas') ;
    Guest_List.splice(2 , 0 , 'Basheer Farooqi');
    Guest_List.push('Mustafa Kamal');
    for(let i=0; i<Guest_List.length; i++){
        console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!')
    }

    console.log('\nSorry we can not arrange big table, Only two peoples will be invited.');

    while(Guest_List.length > 2){
      let remove_Guest = Guest_List.pop();
      console.log(`Sorry Mr. ${remove_Guest}, You are not invited for Dinner.`);
    }

    for(let i=0; i<Guest_List.length; i++){
        console.log('Dear Mr. ' + Guest_List[i] + ',\n\nYou are still invited.\n\nThank You!')
    }

    Guest_List.splice(0, 2);

    console.log(Guest_List);

