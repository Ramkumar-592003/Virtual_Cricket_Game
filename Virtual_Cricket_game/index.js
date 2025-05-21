let selected=null;
let flag=false;
let inputValue=null;
let number=null;
let yourtotal=0;
let opptotal=0;
let stopFunction1=false;
let stopFunction2=false;
let words=["Zero","One","Two","Three","Four","Five","Six"];
let batcomments=["Showtime,superstart!","Swing like it's the Last Over!","Make the ball cry!","Don't just stand there-scare the bowlwer!",
    "Kepp calm and smash on!","Bat like the world's watching",
    "Short fired-bowler tired!","Bat like a beast!","Boundary alert-clean and classy!",
    "Shot of the day! Maybe the week","Even Google Maps Couldn't stop that ones",
    "No chill,just skill","Bowler's dreams just got a crack!",
    "Bowler's still processing that trauma!","Vinveli Nayaga"
];
let bowlcomments=["Wicket loading....pleasewait!","what a delivery",
    "it's not a ball,it's a missile!","Bowling is art-you are picasso today!",
    "it's not a delivery, it's warning","Bowling like you own the pitch today",
    "Wickets on the way","Heads up,it's gonna be bouncer party!",
    "That bouncer's higher than your credict card bill!",
    "That yorker's clenaer than your last breakup!",
    "You're not just bowler,you're a wicket machine!",
    "You bowl,stumps fall!","No one bowls like you!",
    "You're the game changer!"
]
document.getElementById("Even").addEventListener("click",function(){

    document.getElementById("Even").style.transition="all 1s ease";
    document.getElementById("Even").style.transform="translateX(100%) rotate(360deg)";
    document.getElementById("Or").style.display="none";
    document.getElementById("Odd").style.display="none";
    setTimeout(() => {
        document.querySelector(".userInput").style.display="block";
        
    },500);
    toss(2);
    flag=true;
});
document.getElementById("Odd").addEventListener("click",function(){
    document.getElementById("Or").style.display="none";
    document.getElementById("Even").style.display="none";
    document.getElementById("Odd").style.transition="all 1s ease";
    document.getElementById("Odd").style.transform="translateX(100%) rotate(360deg)";
    setTimeout(() => {
        document.querySelector(".userInput").style.display="block";
        
    },500);
    toss(1);
    flag=true;
});
function toss(value){
    if(selected===null){
        selected=value;
        userInput(value);
        flag=true;
    }
    else{
        alert("You already Selected a Toss mamey");
    }
}

function submitted(){
    if(flag){
        userInput(selected);
        // console.log(selected);
    }
    else{
        alert("Fisrt select the Toss mamey");
    }
}
function userInput(x){
        console.log(x);

        document.getElementById("submitValue").addEventListener("click",function(){
            document.getElementById("submitValue").style.backgroundColor="#32cd32";
            inputValue=Number(document.getElementById("inputValue").value);
            if(!isNaN(inputValue)&& inputValue>0 && inputValue<=6){
                number=inputValue;
                // console.log(number);
                document.getElementById("inputValue").disabled=true;
                document.getElementById("submitValue").disabled=true;
                console.log(number);
                Result(x,number);
                    document.querySelector(".userInput").style.display="none";
                    document.querySelector(".Toss").style.display="none";
                
               

            }
            else{
                alert("Enter Value bteween 1to 6");
            }

            });

}    

function Result(x,y){
    let random=Math.floor(Math.random()*6)+1;
    console.log("x value is",x);
    console.log("yvalue:",y);    
    console.log(random);
    let sum=y+random;
    const descoutput=document.getElementById("descoutput");
    const batting =document.getElementById("batting");
    const bowling=document.getElementById("bowling");
    if(sum%x==0){
        descoutput.style.display="block";
        descoutput.textContent="You won the Toss Mamey";
        setTimeout(() => {
            batting.style.display="block";
            bowling.style.display="block";
            descoutput.textContent="Choose Bat or Bowl";

        }, 2000);
     
        document.getElementById("batting").addEventListener("click",function(){
            document.getElementById("descoutput").textContent="You choose to bat first";
            batting.style.display="none";
            bowling.style.display="none";
            Bat();
            
        });
        document.getElementById("bowling").addEventListener("click",function(){
            document.getElementById("descoutput").textContent="You choose to bowl first";
            batting.style.display="none";
            bowling.style.display="none";
            Bowl();
            
        })
        
        

    }
    else{
        batting.style.display="none";
        bowling.style.display="none";
        descoutput.textContent="You Lost the Toss Mamey";
        descoutput.style.display="block";
        document.getElementById("descoutput").textContent="Opponent choose to bowl fisrt";
        Bat();
    }

}

function Bat(){    
    // let yourgameover=false;
    
        function calculateyourTotal(value){    
        document.getElementById("descoutput").textContent="You are batting now";
         if(stopFunction1) return;   
         document.getElementById("run"+value).classList.add("clicked-effect");
         setTimeout(() => {
            document.getElementById("run"+value).classList.remove("clicked-effect");
         }, 1000);
        console.log(" your value :",value);
        document.getElementById("userhand").src="hands/you_hand_"+value+"_d.png";
        const random=Math.floor(Math.random()*6)+1;
        document.getElementById("opphand").src="hands/opp_hand_"+random+".png";
        console.log(" your randomvale :",random)
        if(value!==random){
            const index=Math.floor(Math.random()*15)+1;
            document.getElementById("descoutput").textContent=batcomments[index];
            document.getElementById("score").textContent=words[value]+"!!";
            yourtotal+=value;
            console.log(" your sum :",yourtotal);
            document.getElementById("yourTotal").textContent=yourtotal;

        }
        else{
            document.getElementById("descoutput").textContent="That's it,your wicket's been taken";
            document.getElementById("score").textContent="OUT";
            document.getElementById("yourTotal").textContent=yourtotal;
            console.log("ethan da un batting score:",yourtotal);
            setTimeout(() => {
                document.getElementById("descoutput").textContent="First innings is over! Get ready to bowl!!"
            }, 500);
            stopFunction1=true;
            bowl(yourtotal);
            return;
        }

    }
     document.getElementById("run1").addEventListener("click",()=>calculateyourTotal(1));
     document.getElementById("run2").addEventListener("click",()=>calculateyourTotal(2));
     document.getElementById("run3").addEventListener("click",()=>calculateyourTotal(3));
     document.getElementById("run4").addEventListener("click",()=>calculateyourTotal(4));
     document.getElementById("run5").addEventListener("click",()=>calculateyourTotal(5));
     document.getElementById("run6").addEventListener("click",()=>calculateyourTotal(6));    

    }

     
function bowl(x){
    setTimeout(() => {
        document.getElementById("descoutput").textContent="Time to bowl! Fisrt ball,here we go!";
    }, 2000);

    function calculateoppTotal(value){
        
        if(stopFunction2) return;
        document.getElementById("run"+value).classList.add("clicked-bowl-effect");
        setTimeout(() => {
           document.getElementById("run"+value).classList.remove("clicked-bowl-effect");
        }, 1000);

        console.log(" opp value :",value);
        document.getElementById("userhand").src="hands/you_hand_"+value+"_d.png";
        const random=Math.floor(Math.random()*6)+1;
        document.getElementById("opphand").src="hands/opp_hand_"+random+".png";
        console.log(" opp randomvale :",random)
        opptotal+=random;
        if(value!==random && opptotal<=x){
            const index=Math.floor(Math.random()*15)+1;
            document.getElementById("descoutput").textContent=bowlcomments[index];
            document.getElementById("score").textContent=words[random]+"!!";
          
            console.log("opp sum :",opptotal);
            document.getElementById("opponentTotal").textContent=opptotal;
        }
        else{
            document.getElementById("descoutput").textContent="Boom you got wicket";
            document.getElementById("score").textContent="OUT !!";
            document.getElementById("opponentTotal").textContent=opptotal;
            console.log("ethan da opponent batting score:",opptotal);
            stopFunction2=true;
            winOrloose(x,opptotal);
            return;
        }


    }


document.getElementById("run1").addEventListener("click",()=>calculateoppTotal(1));
document.getElementById("run2").addEventListener("click",()=>calculateoppTotal(2));
document.getElementById("run3").addEventListener("click",()=>calculateoppTotal(3));
document.getElementById("run4").addEventListener("click",()=>calculateoppTotal(4));
document.getElementById("run5").addEventListener("click",()=>calculateoppTotal(5));
document.getElementById("run6").addEventListener("click",()=>calculateoppTotal(6));

}

function Bowl(){
    function calculateoppTotal(value){
        document.getElementById("descoutput").textContent="oppoent is batting now";
        if(stopFunction2) return;
        document.getElementById("run"+value).classList.add("clicked-bowl-effect");
        setTimeout(() => {
           document.getElementById("run"+value).classList.remove("clicked-bowl-effect");
        }, 1000);
        
        console.log(" opp value :",value)
        document.getElementById("userhand").src="hands/you_hand_"+value+"_d.png";
        const random=Math.floor(Math.random()*6)+1;
        document.getElementById("opphand").src="hands/opp_hand_"+random+".png";
        console.log(" opp randomvale :",random)
        if(value!==random){
            const index=Math.floor(Math.random()*15)+1;
            document.getElementById("descoutput").textContent=bowlcomments[index];
            document.getElementById("score").textContent=words[random]+"!!";
            opptotal+=random;
            console.log("opp sum :",opptotal);
            document.getElementById("opponentTotal").textContent=opptotal;
        }
        else{
            document.getElementById("descoutput").textContent="opponent wicket is gone";
            document.getElementById("score").textContent="OUT !!";
            document.getElementById("opponentTotal").textContent=opptotal;
            console.log("ethan da opponent batting score:",opptotal);
            stopFunction2=true;
            bat(opptotal);
            return;

        }

    }

document.getElementById("run1").addEventListener("click",()=>calculateoppTotal(1));
document.getElementById("run2").addEventListener("click",()=>calculateoppTotal(2));
document.getElementById("run3").addEventListener("click",()=>calculateoppTotal(3));
document.getElementById("run4").addEventListener("click",()=>calculateoppTotal(4));
document.getElementById("run5").addEventListener("click",()=>calculateoppTotal(5));
document.getElementById("run6").addEventListener("click",()=>calculateoppTotal(6));

}

function bat(y){
    
    // let yourgameover=false;
        function calculateyourTotal(value){
            document.getElementById("descoutput").textContent="you rae batting now";
         if(stopFunction1) return; 
                  document.getElementById("run"+value).classList.add("clicked-effect");
         setTimeout(() => {
            document.getElementById("run"+value).classList.remove("clicked-effect");
         }, 1000);  
        console.log(" your value :",value); 
        document.getElementById("userhand").src="hands/you_hand_"+value+"_d.png";
        document.getElementById("score").textContent="you hit"+ value;
        const random=Math.floor(Math.random()*6)+1;
        document.getElementById("opphand").src="hands/opp_hand_"+random+".png";
        console.log(" your randomvale :",random);
        yourtotal+=value;
        if(value!==random && yourtotal<=y){
            const index=Math.floor(Math.random()*15)+1;
            document.getElementById("descoutput").textContent=batcomments[index];
            document.getElementById("score").textContent=words[value]+"!!";
          
            console.log(" your sum :",yourtotal);
            document.getElementById("yourTotal").textContent=yourtotal;

        }
        else{
            document.getElementById("descoutput").textContent="you wicket gone";
            document.getElementById("score").textContent="OUT !!";
            document.getElementById("yourTotal").textContent=yourtotal;
            console.log("ethan da un batting score:",yourtotal);
            stopFunction1=true;
            winOrloose(yourtotal,y);
            return;
        }

    }
     document.getElementById("run1").addEventListener("click",()=>calculateyourTotal(1));
     document.getElementById("run2").addEventListener("click",()=>calculateyourTotal(2));
     document.getElementById("run3").addEventListener("click",()=>calculateyourTotal(3));
     document.getElementById("run4").addEventListener("click",()=>calculateyourTotal(4));
     document.getElementById("run5").addEventListener("click",()=>calculateyourTotal(5));
     document.getElementById("run6").addEventListener("click",()=>calculateyourTotal(6));    

    }
    function winOrloose(you,opponent){
        if(you>opponent){
            document.getElementById("descoutput").textContent="You win game mamey";
            document.getElementById("score").textContent="Game Over";
        }
        else if(you<opponent){
            document.getElementById("descoutput").textContent="You loss the game mamey";
                        document.getElementById("score").textContent="Game Over";
        }
        else{
            document.getElementById("descoutput").textContent="Match tie mamey";
                        document.getElementById("score").textContent="Game Over";
                        Tie();
        }


    }
// function Tie(){

// }



    




