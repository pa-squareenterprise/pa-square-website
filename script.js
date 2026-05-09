function showSection(sectionId) {

let sections = document.querySelectorAll(".section");

sections.forEach(function(section){
section.style.display = "none";
});

document.getElementById(sectionId).style.display = "block";

window.scrollTo({
top:0,
behavior:"smooth"
});

/* ════ ZOHO FORMS TAB SWITCHER ════ */
const ZOHO_FORMS={
  'enquiry':'https://forms.zohopublic.in/vinothkpasquareenterprisezoho1/form/PASquareEnterprisesEnquiry/formperma/h82qMJ47mbPIibCaL0uUGVH6BJoJFC4lqGvhamVc_IU/js',
  'gst-en':'https://forms.zohopublic.in/pasquareenterprisezoho1/form/GSTRegistrationForm/formperma/_eAZeZpZ6CFdg3vdcRmnte9iYOFcfHCiMEFH--YK3nA/js',
  'gst-ta':'https://forms.zohopublic.in/pasquareenterprisezoho1/form/GSTRegistrationFormTamil/formperma/ieJIkA9Kbz6v1vvpjXgmQYULmIip13igYZiSbWUOAvA/js',
  'itr':'https://forms.zohopublic.in/pasquareenterprisezoho1/form/ITRChecklist/formperma/nYrSHXH4u-wXmslsBDKprV-nIbIkd4pU0N_hy0xECgg/js'
};
const loaded={};
function loadZohoForm(key){
  if(loaded[key])return;
  loaded[key]=true;
  const container=document.getElementById('zf-'+key);
  const loader=document.getElementById('load-'+key);
  const script=document.createElement('script');
  script.src=ZOHO_FORMS[key];
  script.type='text/javascript';
  script.onload=()=>{if(loader)loader.style.display='none';};
  script.onerror=()=>{if(loader)loader.innerHTML='<p style="color:#c0392b;font-size:13px;text-align:center;padding:20px">⚠ Could not load form. <a href="https://wa.me/919751962727" style="color:#C8A84B">Contact us on WhatsApp</a></p>';};
  container.appendChild(script);
}
function switchTab(key,btn){
  document.querySelectorAll('.ftab').forEach(t=>t.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.fpanel').forEach(p=>p.classList.remove('active'));
  document.getElementById('panel-'+key).classList.add('active');
  loadZohoForm(key);
}
window.addEventListener('load',()=>loadZohoForm('enquiry'));
  
}
