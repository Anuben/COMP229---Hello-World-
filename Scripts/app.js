//IIFE -- Imediately Invoked Function Expression
(function()
{
    function Start()
    {
        console.log("Hello, World!");
    }

    window.addEventListener('load', Start);
})();