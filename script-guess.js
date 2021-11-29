var count = 0
var ordered = document.getElementsByClassName('text-box2')
var guess_text = document.getElementById('guess-text')
var oops = document.getElementById('oops')
var nice = document.getElementById('nice')
var popup = document.getElementById('pop_up')

var first_unordered = document.getElementById('unordered-1')
var first_ordered = document.getElementById('ordered-1')
var second_unordered = document.getElementById('unordered-2')
var second_ordered = document.getElementById('ordered-2')
var third_unordered = document.getElementById('unordered-3')
var third_ordered = document.getElementById('ordered-3')
var fourth_unordered = document.getElementById('unordered-4')
var fourth_ordered = document.getElementById('ordered-4')
var fifth_unordered = document.getElementById('unordered-5')
var fifth_ordered = document.getElementById('ordered-5')
var sixth_unordered = document.getElementById('unordered-6')
var sixth_ordered = document.getElementById('ordered-6')
var seventh_unordered = document.getElementById('unordered-7')
var seventh_ordered = document.getElementById('ordered-7')
var eighth_unordered = document.getElementById('unordered-8')
var eighth_ordered = document.getElementById('ordered-8')
var ninth_unordered = document.getElementById('unordered-9')
var ninth_ordered = document.getElementById('ordered-9')
var tenth_unordered = document.getElementById('unordered-10')
var tenth_ordered = document.getElementById('ordered-10')


sixth_unordered.addEventListener('click', () =>{
    if (count == 0){
        sixth_unordered.style.display = 'none';
        first_ordered.innerHTML = "1) Mehani woke up earlier than usual";
        ordered[0].style.backgroundColor = "pink";
        guess_text.innerHTML = "Correct Guess! Now guess the second event in the sequence"
        count++;
        nice.play()
    }
    else{
        guess_text.innerHTML = "Wrong guess lol, try again";
        oops.play();
    }
})

third_unordered.addEventListener('click', () =>{
    if (count == 1){
        third_unordered.style.display = 'none';
        second_ordered.innerHTML = "2) Mehani had her visa appointment and had to take the bus";
        ordered[1].style.backgroundColor = "pink";
        guess_text.innerHTML = "That's right! Now guess the third event in the sequence"
        count++;
        nice.play()
    }
    else{
        guess_text.innerHTML = "This was bad, shoot again";
        oops.play();
    }
})

fourth_unordered.addEventListener('click', () =>{
    if (count == 2){
        fourth_unordered.style.display = 'none';
        third_ordered.innerHTML = "3) Mehani got lunch from D2 but did not enjoy her food";
        ordered[2].style.backgroundColor = "pink";
        guess_text.innerHTML = "Well done! Now guess the fourth event in the sequence"
        count++;
        nice.play()
    }
    else{
        guess_text.innerHTML = "I'm sorry but... wrong guess";
        oops.play();
    }
})

second_unordered.addEventListener('click', () =>{
    if (count == 3){
        second_unordered.style.display = 'none';
        fourth_ordered.innerHTML = "4) Mehani decided to take a quick nap but accidentally overslept";
        ordered[3].style.backgroundColor = "pink";
        guess_text.innerHTML = "Wuhu, you're on a roll! Guess the next"
        count++;
        nice.play()
    }
    else{
        guess_text.innerHTML = "Bad, that was very bad";
        oops.play();
    }
})

eighth_unordered.addEventListener('click', () =>{
    if (count == 4){
        eighth_unordered.style.display = 'none';
        fifth_ordered.innerHTML = "5) Mehani got late for course registration and found that all IM classes were waitlisted or closed!";
        ordered[4].style.backgroundColor = "pink";
        guess_text.innerHTML = "BOOM, got it. Now guess the sixth."
        count++;
        nice.play()
    }
    else{
        guess_text.innerHTML = "Nope, not this one";
        oops.play();
    }
})

fifth_unordered.addEventListener('click', () =>{
    if (count == 5){
        fifth_unordered.style.display = 'none';
        sixth_ordered.innerHTML = "6) Mehani went to the Health Center for her flu shot";
        ordered[5].style.backgroundColor = "pink";
        guess_text.innerHTML = "Yessss, keep going!"
        count++;
        nice.play()
    }
    else{
        guess_text.innerHTML = "Better luck next time";
        oops.play();
    }
})

tenth_unordered.addEventListener('click', () =>{
    if (count == 6){
        tenth_unordered.style.display = 'none';
        seventh_ordered.innerHTML = "7) Mehani got locked out of her room and had to wait for 30 minutes for public safety to open the door";
        ordered[6].style.backgroundColor = "pink";
        guess_text.innerHTML = "Yessss, keep going!"
        count++;
        nice.play()
    }
    else{
        guess_text.innerHTML = "Wrong guess lol, try again";
        oops.play();
    }
})


seventh_unordered.addEventListener('click', () =>{
    if (count == 7){
        seventh_unordered.style.display = 'none';
        eighth_ordered.innerHTML = "8) Mehani was in a rush and banged her head against the glass door";
        ordered[7].style.backgroundColor = "pink";
        guess_text.innerHTML = "Good work, you're almost there!"
        count++;
        nice.play()
    }
    else{
        guess_text.innerHTML = "Wrong, please don't do this to yourself";
        oops.play();
    }
})

ninth_unordered.addEventListener('click', () =>{
    if (count == 8){
        ninth_unordered.style.display = 'none';
        ninth_ordered.innerHTML = "9) Mehani sat in the wrong classroom for 20 minutes without realizing it";
        ordered[8].style.backgroundColor = "pink";
        guess_text.innerHTML = "Nice! On to the last one"
        count++;
        nice.play()
    }
    else{
        guess_text.innerHTML = "Oops, wrong guess";
        oops.play();
    }
})

first_unordered.addEventListener('click', () =>{
    if (count == 9){
        first_unordered.style.display = 'none';
        tenth_ordered.innerHTML = "10) Mehani finally entered the class in the middle of the lecture";
        ordered[9].style.backgroundColor = "pink";
        guess_text.innerHTML = "You made it! Good work"
        count++;
        nice.play()
        popup.style.display = "block";
    }
    else{
        guess_text.innerHTML = "Haha, nope"
        oops.play();
    }
})

