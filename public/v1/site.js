(function(){
 var header=document.querySelector('header');
 var toggle=header?.querySelector('button[aria-label="Toggle menu"]');
 var nav=document.createElement('nav');nav.className='miras-nav-mobile';nav.setAttribute('aria-label','Mobile navigation');
 nav.innerHTML='<a href="/v1/services">Services</a><a href="/v1/work">Work</a><a href="/v1/approach">Approach</a><a href="/v1/careers">Careers</a><a href="/v1/contact">Contact</a><a href="/v1/about">About</a><a href="/v1/contact">Discuss a project</a>';
 header?.appendChild(nav);toggle?.setAttribute('aria-expanded','false');
 toggle?.addEventListener('click',function(){var open=nav.classList.toggle('is-open');toggle.setAttribute('aria-expanded',String(open))});
 nav.addEventListener('click',function(e){if(e.target.closest('a'))nav.classList.remove('is-open')});
 var form=document.querySelector('[data-contact-form]');
 if(form){
  var feedback=document.createElement('p');feedback.id='form-feedback';feedback.hidden=true;feedback.setAttribute('role','status');form.insertAdjacentElement('afterend',feedback);
  form.addEventListener('submit',function(event){event.preventDefault();
   var data=new FormData(form);
   if(data.get('_gotcha'))return;
   var name=String(data.get('name')||'').trim();
   var email=String(data.get('email')||'').trim();
   var company=String(data.get('company')||'').trim()||'Not provided';
   var service=String(data.get('serviceType')||'').trim()||'Not selected';
   var message=String(data.get('message')||'').trim();
   var subject='Project enquiry from '+name;
   var body=['Name: '+name,'Email: '+email,'Company or team: '+company,'Area of interest: '+service,'','Project or technical challenge:',''+message].join('\n');
   feedback.hidden=false;feedback.textContent='Your email application is opening. If it does not open, email hello@mirasai.co directly.';
   window.location.href='mailto:hello@mirasai.co?subject='+encodeURIComponent(subject)+'&body='+encodeURIComponent(body);
  });
 }
 var banner=document.querySelector('.miras-cookie-banner');
 try{if(localStorage.getItem('miras-cookie-choice'))banner.hidden=true}catch(e){banner.hidden=true}
 document.querySelectorAll('[data-cookie-choice]').forEach(function(el){el.addEventListener('click',function(){try{localStorage.setItem('miras-cookie-choice',el.dataset.cookieChoice)}catch(e){} banner.hidden=true})});
})();
