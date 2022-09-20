$(".app-header__anchor").click(function()
{
    $("#ideatorsPage").css("display", "none");
    $("#messagesPage").css("display", "none");
    $("#myProfilePage").css("display", "none");
    $("#developersPage").css("display", "none");
    $("#homePage").css("display", "block");
});
$(".homeButton").click(function()
{
    $("#ideatorsPage").css("display", "none");
    $("#messagesPage").css("display", "none");
    $("#myProfilePage").css("display", "none");
    $("#developersPage").css("display", "none");
    $("#homePage").css("display", "block");
});
$(".ideatorsButton").click(function()
{
    $("#homePage").css("display", "none");
    $("#messagesPage").css("display", "none");
    $("#myProfilePage").css("display", "none");
    $("#developersPage").css("display", "none");
    $("#ideatorsPage").css("display", "block");
});
$(".messagesButton").click(function()
{
    $("#homePage").css("display", "none");
    $("#ideatorsPage").css("display", "none");
    $("#myProfilePage").css("display", "none");
    $("#developersPage").css("display", "none");
    $("#messagesPage").css("display", "block");
});
$(".myProfileButton").click(function()
{
    $("#homePage").css("display", "none");
    $("#ideatorsPage").css("display", "none");
    $("#messagesPage").css("display", "none");
    $("#developersPage").css("display", "none");
    $("#myProfilePage").css("display", "block");
});
$(".developersButton").click(function()
{
    $("#homePage").css("display", "none");
    $("#ideatorsPage").css("display", "none");
    $("#messagesPage").css("display", "none");
    $("#myProfilePage").css("display", "none");
    $("#developersPage").css("display", "block");
});