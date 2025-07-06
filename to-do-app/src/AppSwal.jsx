import React from "react";
import Swal from "sweetalert2";

const App = () => {
    const handleClick = () =>{
        Swal.fire({
            title: "آیا مطمئن هستید؟",
            text: "شما میخواهید انجام دهید؟؟؟؟",
            icon: "question",
            showCancelButton: true,
            confirmButtonText: "Yes",
            cancelButtonText: "No"
        }).then((result) =>{
            if(result.isConfirmed){
                Swal.fire('کار انجام شد');
            } else {
                Swal.fire('کار یا اقدام لغو شد داداش');
            }
        })
    }

    return(
        <div>
            <button onClick={handleClick}>Click Me!!</button>
        </div>
    );
}

export default App;