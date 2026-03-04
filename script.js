document.addEventListener('DOMContentLoaded', () => {
    
    // البحث عن أي رابط يؤدي لصفحة الأسئلة الشائعة
    const faqLinks = document.querySelectorAll('.broken-link, a[href="faq.html"]');

    faqLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // منع الانتقال للصفحة (إيقاف الرابط عن العمل)
            e.preventDefault(); 
            
            // الرسالة التي طلبتها
            alert("عذراً، هذه الصفحة غير موجودة حالياً أو تحت الصيانة!");
        });
    });
});
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. استهداف نموذج الحجز ونموذج التواصل
    const bookingForm = document.getElementById('bookingForm');
    const contactForm = document.getElementById('contactForm');
    const toast = document.getElementById('toastNotification');

    // دالة إظهار الرسالة
    const showToast = () => {
        toast.classList.add('show'); // إضافة كلاس الظهور
        
        // إخفاء الرسالة تلقائياً بعد 3 ثوانٍ
        setTimeout(() => {
            toast.classList.remove('show');
        }, 3000);
    };

    // 2. معالجة إرسال نموذج الحجز
    if (bookingForm) {
        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault(); // منع الصفحة من التحديث
            
            // هنا يمكنك إضافة كود للتأكد من تعبئة الحقول إذا أردت
            
            showToast(); // إظهار الرسالة الآن فقط
            bookingForm.reset(); // مسح البيانات من الخانات بعد الإرسال
        });
    }

    // 3. معالجة إرسال نموذج التواصل (نفس المنطق)
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            showToast();
            contactForm.reset();
        });
    }
});
document.addEventListener('DOMContentLoaded', () => {
    
    // استهداف العناصر
    const contactForm = document.getElementById('contactForm');
    const bookingForm = document.getElementById('bookingForm');
    const toast = document.getElementById('toastNotification');

    // دالة إظهار الرسالة (Toast)
    function showSuccessToast() {
        if (toast) {
            toast.classList.add('show');
            console.log("تم إظهار رسالة النجاح بنجاح!");
            
            // إخفاؤها بعد 3 ثوانٍ
            setTimeout(() => {
                toast.classList.remove('show');
            }, 3000);
        }
    }

    // معالجة نموذج التواصل
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // منع الصفحة من التحديث
            console.log("تم الضغط على إرسال في صفحة التواصل");
            showSuccessToast();
            this.reset(); // تفريغ الحقول بعد الإرسال
        });
    }

    // معالجة نموذج الحجز (نفس الطريقة)
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            showSuccessToast();
            this.reset();
        });
    }
});