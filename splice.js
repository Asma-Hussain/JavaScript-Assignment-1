 // CHAPTER 15: 
    // Q1 : Declare an array named 'fruits' and display the third fruit.
    let fruit = ["Apple" , "Mango" , " Orange" , "Banana"]
    console.log(fruit[2])

    // Q2 : Define an array of cities and display the first and last city
    let cities =["Peshawar" , "Lahore" , "Multan" , "IslamAbad" , "Karachi"]
    console.log(cities[0],cities[4])

    // Q3 : Describe an array with mixed data types and display each element.
    let mix = ["Flowers" , 10 , "vagetable" , 0.1]
    console.log(mix)

    // CHAPTER 16:
    // Q1 : Declare an empty array and add five student names.
    let students = []
    students[0] = "Asma"
    students[1] = "sania"
    students[2] = "Ali"
    students[3] = "Hamza"
    students[4] = "Mahnoor"
    console.log(students)

    // Q2 : Declare an array of colors. Use 'push()' to add two colors at the end of an array.
    let colors = ["white" , "black" , "pink"]
    colors.push("red" , "blue")
    console.log(colors)

    // Q3 : Declare an array with five numbers and add a new number at the end 
    let num =[1,2,3,4,5]
    num.push(6)
    console.log(num)

    //  Q4 : Use 'pop' to remove the last element from an array.
    let nums = [1,2,3,4,5,6,7,8]
    nums.pop()
    console.log(nums)

    // CHAPTER 17 :
    //  Q1 : Declare an array named 'animals' Use unshift() to add an animal at the start of an array.
    let animals =["Cow", "Dog", "cat"]
    animals.unshift("Elephent")
    console.log(animals)

    //  Q2 : Use shift() to remove the first element of an array.
    let Animals =["Cow", "Dog", "cat", "Elephent"]
    Animals.shift()
    console.log(Animals)

    // Q3 : Copy the first three elements from an array of numbers into a new array.[use slice method]
    let Numbers = [1,2,3,4,5,6,7,8]
    let numb = Numbers.slice(3, 5)
    console.log("Removed no: " + numb)

    // Q4 : Use slice() to extract and copy the last three elements of an array  (use negative index)
    let house =["house1", "house2", "house3", "house4"]
    let Houses = house.slice(-3)
    console.log("Extracted house: " + Houses)

    // Q5 : Use splice() to remove two elements from index 2 in an array.
    let array = [1,2,3,4,5,6,7,8]
    array.splice(2,2)
    console.log(array)

    // Q6 : Use splice() to add two cities at index 3 of an array.
    let array1 = ["Peshawar" , "Lahore" , "Multan" , "IslamAbad" , "Karachi"]
    array1.splice(3,1,"Faisalabad","Mardan")
    console.log(array1)

    // Q7 : Use slice() to extract and copy the last three elements of an array.
    let array2 =[1,2,3,4,5,6,7,8,9,10]
    // newarray2 = array2.slice(6,9)
    newarray2 = array2.slice(-3)
    console.log("Last three elements: " + newarray2)

    // Q8 : Use splice() to replce two elements in array .
    let alpha =["a", "b", "c", "d", "e", "f"]
    alpha.splice(2,2,"M", "N")
    console.log(alpha)

    // Q9 : Remove a subject from an subject array using splice() after taking index number from user.
    let subject =["CS", "English ", "Urdu ", "Islamiath ", "Civics"]
    console.log("Subjects: " + subject)
    let index = prompt("Give an index which you want to remove: ")
    subject.splice(index, 1)
    console.log(subject)

    // Q10 : Insert "laptop" and "Tablet" at index 2 in array of gadgets.[Use splice method]
    let gadgets =["Mobile" , " Compter","USB", " Memory Card"]
    gadgets.splice(2,1,"laptop"," Tablet")
    console.log("Gadgets: " +gadgets)
    // CHAPTER 18: 
    // Q1 : Print numbers 1 to 10 using loop
     for(let i=1 ;i<=10 ; i++ ) {
        console.log(i);
    }

    // Q2 : Display subjects stored in an array using a loop.
    let array3 = ["Maths","English","Urdu","Computer","Arts"]
    for(let i=1 ; i<=array3.length ; i++){
      console.log(array3[i])
    }

    // Q3 : Print the multiplication table of 5 using a loop.
    for(let i=1; i<=10 ; i++)
    {
      console.log("5", "*" , i, "=", i * 5 )
    }
    // Q4 : Countdown from 10 to 1 using a loop.

    for(let i=10 ;i>=1 ; i-- ) {
        console.log(i);
    }

    // Q5 : Take five colors as user input, stored them in an array, and display in the console.
    let user = prompt("Give any Five colors name :")
    console.log("Color names: " +user)

    // Q6 : Declare an array of five numbers and display each number in the console.[for loop]
    let array4 =[1,2,3,4,5,6,7,8,9]
    for(let i=1 ; i<=9 ; i++){
        console.log(i)
    }
    // Q7 : Declare an array of five numbers and calculate thier sum. Formula(sum +=i)
    let array5 =[1,2,3,4,5,6,7,8,9]
    sum = 0
    for(let i=1 ; i<array5.length ; i++){
        sum+=array5[i];
        console.log("Sum: " + sum)
    }
      // Bonus : 
    // Q8 : Find the largest number in an array.
    let lar_num = [2 , 3,6,10,2]
    let max = lar_num[0]
    for( let i=1 ; i<=lar_num.length ; i++){
        if(lar_num[i] > max){
            max = lar_num[i]

        }
    }
    console.log("Largest number is: " + max)
