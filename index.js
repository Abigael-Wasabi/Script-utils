
        let v=10;
        for(let i=0;i<v;i++){
            console.log("Hello World");
        }
    
        let score=39;
        if (score >=70 && score <=100){
            console.log("A");
        }
        else if (score >=60 && score <=69){
            console.log("B");
        }                                               
        else if (score >=50 && score <=59){
            console.log("C");
        }
        else if (score >=40 && score <=49){
            console.log("D");
        }
        else if (score <=40){
            console.log("E");
        }
        else{
            console.log("Out of range")
        }
    
        /*let firstname=prompt("firstname")
        let secondname=prompt("Enter your secondname")
        let fullname=firstname+ " " +secondname
        console.log("Your fullname is " + fullname)
    
        let ICT=parseInt(prompt("ICT score"))
        let HTML=parseInt(prompt("HTML score"))
        let GIT=parseInt(prompt("GIT score"))
        let average=(ICT+HTML+GIT)/3
        alert("Your average score is" +" "+ average)
        if (average >=70 && average <=100){
            alert("grade A")
        }
        else if (average >=60 && average <=69){
            alert("grade B")
        }
        else if (average >=50 && average <=59){
            alert("grade C")
        }
        else if (average >=40 && average <=49){
            alert("grade D")
        }
        else if (average <40){
            alert("grade E")
        }
        else{
            alert("Out of range")
        }
   
        let Purchase_amount=parseInt(prompt("Purchase Amount"))
        if (Purchase_amount >=10000){
            let discount=(15/100 * Purchase_amount)
            alert("Purchase Amount after discount is " + (Purchase_amount - discount) + "\n" + "and the discount is"+ (discount));
        }
        else if(Purchase_amount >=5000 && Purchase_amount <=9999){
            let discount=(10/100 * Purchase_amount)
            alert("Purchase Amount after discount is " + (Purchase_amount - discount) + "\n" + "and the discount is " + (discount));
        }
        else if(Purchase_amount >=3000 && purchase_amount <=4999){
            let discount=(5/100 * Purchase_amount)
            alert("Purchase Amount after discount is" + (Purchase_amount - discount) + "\n" + "and the discount is" + (discount));
        }
        else if(Purchase_amount <=2999){
            let discount=(0/100 * Purchase_amount)
            alert("Purchase Amount after discount is " + (Purchase_amount - discount) + "\n" + "and the discount is" + (discount));
        }
        else{
            alert("No discount");
        }
   
        let l=prompt("Enter a random number");
        let m=prompt("Enter a random number");
        let n=prompt("Enter a random number");
        let z=Math.max(l,m,n);
        alert(z + " " + "is the maximum number")
   
    
        let e=(prompt("enter email"))
        if (e.endsWith(".com")){
            alert("Welcome")
        }
        else{
            alert("Please enter a valid email address")
        }
    this
        let email =prompt("Input your email");
        let u=email.slice(-4)
        if (u == ".com"){
            alert("Welcome")
        }
        else{
            alert("Error")
        }
      
        let q=(prompt("Enter password"))
        if (q.length<10 ){
            alert("Invalid")
        }
        else if (q.length > 10){
            alert("Welcome")
        }*/
    
        for (let i=1;i<=10;i++){
            console.log(i);
        }
    
        let i=1;
        while(i<=5){
            console.log(i);
            i++;
        }
    
        let p=1;
        do{
            console.log(p);
            p++
        }
        while (p<=5);
   
        for(let a=1; a<=20; a++)
        if(a % 2 == 0){
            console.log(a ," Even");
        }
        else{
            console.log(a, "Odd");
        }
    
        for(let s = 1; s<=50; s++)
        if (s % 3==0 && s % 5==0){
            console.log(s,"Fizz Buzz")
        }
        else if (s % 5==0){
            console.log(s,"Buzz")
        }
        else if (s % 3==0){
            console.log(s,"Fizz")
        }
        else{
            console.log(s)
        }
    
        for(let i=10; i>=1; i--)
        console.log (i); 
   
        function fizzbuzz(s){
            if (s % 3==0 && s % 5==0){
                console.log(s,"Fizz Buzz")
            }
            else if (s % 5==0){
                console.log(s,"Buzz")
            }
            else if (s % 3==0){
                console.log(s,"Fizz")
            }
            else{
                console.log(s)
            }
        }
            (fizzbuzz(20))
    
        sum=(a,b)=>{
            let ans=a+b
            console.log(ans)
        }
        sum(9,10)
    
        function Area(radius) {
            const pi = 3.14159;
            const area = pi * radius ** 2;
            return area;
          }
        const area=Area(14)
        console.log(area);
    

        function sum(){
            let sum = 0;
            for (let i = 1;i<=20; i++){
                console.log(i);
                sum+=i;
            }
            console.log("The sum is" + " " +sum);
        }
            sum()
    
 