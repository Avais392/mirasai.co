// Optional: configure a real Formspree-compatible HTTPS form endpoint. Keep blank until configured.
window.MIRAS_CONTACT_FORM_ENDPOINT = '';

(function(){
 var header=document.querySelector('header');
 function updateHeader(){ if(!header)return;var solid=window.scrollY>28 || !document.body.classList.contains('page-home');
  header.classList.toggle('bg-transparent',!solid);header.classList.toggle('bg-background/95',solid);header.classList.toggle('backdrop-blur-sm',solid);header.classList.toggle('border-b',solid);header.classList.toggle('border-border',solid);}
 updateHeader();window.addEventListener('scroll',updateHeader,{passive:true});
 var toggle=header?.querySelector('button[aria-label="Toggle menu"]');
 var nav=document.createElement('nav');nav.className='miras-nav-mobile';nav.setAttribute('aria-label','Mobile navigation');
 nav.innerHTML='<a href="/services">Services</a><a href="/work">Work</a><a href="/approach">Approach</a><a href="/about">About</a><a href="/contact">Contact</a><a href="/contact">Discuss a project</a>';
 header?.appendChild(nav);toggle?.setAttribute('aria-expanded','false');
 toggle?.addEventListener('click',function(){var open=nav.classList.toggle('is-open');toggle.setAttribute('aria-expanded',String(open))});
 nav.addEventListener('click',function(e){if(e.target.closest('a'))nav.classList.remove('is-open')});
 var form=document.querySelector('[data-contact-form]');
 if(form){
  var feedback=document.createElement('p');feedback.id='form-feedback';feedback.hidden=true;feedback.setAttribute('role','status');form.insertAdjacentElement('afterend',feedback);
  form.addEventListener('submit',async function(event){event.preventDefault();var endpoint=window.MIRAS_CONTACT_FORM_ENDPOINT || '';
   if(!endpoint){feedback.hidden=false;feedback.textContent='This recovered form is not connected yet. Set MIRAS_CONTACT_FORM_ENDPOINT in site.js before accepting messages.';return;}
   var button=form.querySelector('[type="submit"]');button.disabled=true;button.textContent='Sending…';
   try{var res=await fetch(endpoint,{method:'POST',body:new FormData(form),headers:{Accept:'application/json'}});
    if(!res.ok)throw new Error('Failed');feedback.hidden=false;feedback.textContent='Thanks — your message has been sent.';form.reset();
   }catch(e){feedback.hidden=false;feedback.textContent='Sorry, the message could not be sent. Please try again.';}
   finally{button.disabled=false;button.textContent='Send message';}
  });
 }
 var banner=document.querySelector('.miras-cookie-banner');
 try{if(localStorage.getItem('miras-cookie-choice'))banner.hidden=true}catch(e){banner.hidden=true}
 document.querySelectorAll('[data-cookie-choice]').forEach(function(el){el.addEventListener('click',function(){try{localStorage.setItem('miras-cookie-choice',el.dataset.cookieChoice)}catch(e){} banner.hidden=true})});
})();
