const input = document.getElementById('input_id');
const ios_time = document.getElementById('the_time')
const output = document.getElementById('output_id');
let result = undefined;


const  arg = document.getElementsByClassName("app-keys");

const curr_time = function() {
    const date_class = new Date();
    return  date_class.getHours() + ":" + date_class.getMinutes() 
}

ios_time.innerHTML = curr_time();



const IsOperator = function( ss ) {
    return ss == 'division' || ss == 'multi' || ss == 'minus' || ss == 'plus';
}


const handel_events = e =>  {
    const ret_id = e.target.id;
    let data_key = e.target.innerHTML;
    // let string = "";

    if (ret_id == 'result') {
        let res = 0;

        try {
            res = eval(input.innerHTML.replaceAll(' ', ''));
            if (res == undefined)
                throw -1;
        }
        catch(exp) {
            input.innerHTML = "";
            output.innerHTML = "0";
            return ;
        }
        input.innerHTML = (input.innerHTML += (" = " + res ));
        output.innerHTML = res;
    }
    else if (IsOperator(ret_id)) {
        if (ret_id == "multi")
            data_key = "*";
        else if (ret_id == "division")
            data_key = "/";
        input.innerHTML = (input.innerHTML + " " + data_key);
    }
    else if (ret_id == 'num' || ret_id == 'point') {
        input.innerHTML += data_key;
    }
    else if (ret_id == 'earse') {
        input.innerHTML = "";
        output.innerHTML = "0";
    }
}


// const handel_event = e => {
//     const ret = e.target.id;
//     const data_key = e.target.innerHTML;
//     let string = data_key;

//     if (ret == 'result') {
//         result = eval(string);
//         string = (string += (" = " + result)); 
//         input.innerHTML = string
//         output.innerHTML = result;
//     }
//     else if (ret == 'num' || ret == 'point' || ret == 'minus' || IsOperator(ret)) {

//         if (ret == minus && (string == 0 || string == "" || string.slice(-1) == '-'))
//             return ;

//         if (IsOperator(ret))
//             string += " ";
//         string += data_key;
//         input.innerHTML = string;
//     }
//     else if (ret == 'earse') {
//         string = "";
//         input.innerHTML = "";
//         output.innerHTML = "0";
//     }

//     // console.log(e.target.id)
// }

document.addEventListener('click', handel_events);



// console.log(curr_time());


// for (let key of arg) {
    // console.log(key);
    // console.log(key.id)
    // key.addEventListener('click', function() {
        // console.log(key.target.id);
    // });
// }


// test.addEventListener('click', function(){
//     console.log("HELLO TO CLOCCDDD");

//     if (Math.random() % 2)
//         input.innerHTML = "2003 + 333";
//     else
//         input.innerHTML = "1002 + 44";
// });





