// ১. prompt দিয়ে ইউজারের কাছ থেকে একটা সংখ্যা নাও। সেটার সাথে ২০০যোগ করো। যোগ করতে গেলে parse করা লাগলে সেটা করো। তারপর সেই রেজাল্টকে alert দিয়ে আউটপুট দেখাও 

const getDetails=()=>{
    const details =prompt('Please enter number');
    const parseNumber = parseInt(details);
    const result =parseNumber + 200;
    alert(result)
    console.log(result);
}

// ২. ব্রাউজারে একটা confirm করে জিজ্ঞেস করো তুমি কি তোমার ওয়েবসাইট এর লোকেশন দেখতে চাও। যদি বলে দেখতে চাই তাহলে সেই ওয়েবসাইট এর লোকেশন এর href জিনিসটা কনসোল লগ করে দেখাও 

const showHref = ()=>{
    const conFirm=confirm('তুমি কি তোমার ওয়েবসাইট এর লোকেশন দেখতে চাও')
    if (conFirm) {
        console.log("Page location is " + window.location.href);
    }
    else{
        console.log('not interasted');
    }
   
}
