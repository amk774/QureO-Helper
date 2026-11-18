const lang = document.getElementById('lang');
const question = document.getElementById('question');
const result = document.getElementById('result');

function starter(language){
  return language==='python'
    ? '# اكتب الحل هنا\\n'
    : 'public class Main {\\n    public static void main(String[] args) {\\n        // اكتب الحل هنا\\n    }\\n}';
}
function render(title, explanation, code){
  result.innerHTML='';
  const h=document.createElement('h2'); h.textContent=title; result.append(h);
  const p=document.createElement('p'); p.className='answer'; p.textContent=explanation; result.append(p);
  const pre=document.createElement('pre'); pre.textContent=code; result.append(pre);
}
document.getElementById('analyze').addEventListener('click',()=>{
  const q=question.value.trim();
  if(!q){render('اكتب السؤال أولًا','أدخل نص السؤال في المربع ثم اضغط تحليل السؤال.',starter(lang.value));return;}
  render('تم تجهيز مساحة المساعدة',
    'هذه النسخة الأولية لا تتضمن محركًا ذكيًا متصلًا أو قراءة تلقائية للمنصة. استخدم السؤال المكتوب لتحديد المطلوب، ويمكن تطوير المحرك لاحقًا أو إضافة خدمة ذكاء اصطناعي بإعدادات آمنة.\n\nالسؤال المدخل:\n'+q,
    starter(lang.value));
});
document.getElementById('clear').addEventListener('click',()=>{
  question.value='';
  result.innerHTML='<h2>النتيجة</h2><p class="placeholder">اكتب سؤالًا واضغط «تحليل السؤال» لعرض مساعدة.</p>';
});
