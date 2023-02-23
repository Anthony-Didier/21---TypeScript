function gift(age, sum) {
    var memberAge = age + 3;
    sum(memberAge); // number
}
gift(30, function (num) {
    console.log(typeof num);
    console.log(num); // de type void
}); // 33
function gift2(age, sum) {
    var memberAge = age + 3;
    sum(memberAge.toString()); // string
}
gift2(30, function (num) {
    console.log(typeof num);
    console.log(num); // de type void
}); // 33
