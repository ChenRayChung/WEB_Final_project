
for (i = 1; i < 5; i++) {
    $("#text-" + i).hide(0);
    $("#btn-" + i).click(function () {
        $("#text-" + i).toggle(500);
    })
}
// $("#text-2").hide(0);
// $("#btn-2").click(function () {
//     $("#text-2").toggle(500);
// });
// $("#text-3").hide(0);
// $("#btn-3").click(function () {
//     $("#text-3").toggle(500);
// });
// $("#text-4").hide(0);
// $("#btn-4").click(function () {
//     $("#text-4").toggle(500);
// })
