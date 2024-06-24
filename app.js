let bars=document.querySelector('.fa-bars');
let header=document.querySelector('.header');
let main=document.querySelector('.main-page');
let down1=document.querySelector('.down1');
let product=document.querySelector('.product');
let down2=document.querySelector('.down2');
let resources=document.querySelector('.resources');

bars.addEventListener('click',function(){
    header.classList.toggle('head1');
    main.classList.toggle('mainpage1')
    console.dir(header)
});

down1.addEventListener('mouseover',function(event){
     this.style.color='#ffd687' 
     product.classList.add('product-detail')
     product.innerHTML=` <div class="detail">
          <div class="detail-11">
            <a href="#">People</a>
            <p>Employee system of record</p>
          </div>
          <a href="#">People</a>
          <a href="#">Time Off</a>
        </div>
        
        <div class="detail">
          <div class="detail-11">
            <a href="#">Growth</a>
            <p>Excel at performance and engagement</p>
          </div>
          <a href="#">Engagement</a>
          <a href="#">Performance</a>
        </div>

        <div class="detail">
          <div class="detail-11">
            <a href="#">Money</a>
            <p>Get employees and contractors paid</p>
          </div>
          <a href="#">Benefits</a>
          <a href="#">Payroll</a>
          <a href="#">payments</a>
        </div>

        <div class="detail">
          <div class="detail-11">
            <a href="#">tech</a>
            <p>Manage equipment and accounts</p>
          </div>
          <a href="#">apps</a>
          <a href="#">devices</a>
        </div>
`
})

down1.addEventListener('click',function(event){
  product.classList.remove('product-detail');
  product.innerHTML='';
  this.style.color='rgba(0, 0, 0, 0.8)' 
  let box=document.querySelector('.box');
  box.classList.toggle('box1');
});

down2.addEventListener('mouseover',function(){
  this.style.color='#ffd687' ;
  resources.classList.add('resources-detail');
  resources.innerHTML=` <div class="navigation-tool">
          <a href="#">knowledge center</a>
          <a href="#">case studies</a>
          <a href="#">changelog</a>
          <a href="#">about us</a>
          <a href="#">careers</a>
          <a href="#">blog</a>
         </div>

         <div class="feature">

          <a href="#">FEATURED</a>
          <div class="image">
            <img src="images/img1.webp" alt="">
            <div class="img-detail">
              <a href="#">case studies</a>
              <a href="#">former revolut execs choose zelt for deblock</a>
            </div>
          </div>
          <div class="image">
            <img src="images/img2.webp" alt="">
            <div class="img-detail">
              <a href="#">case studies</a>
              <a href="#">private equity backed oneDome consolidates HR and payroll across group</a>
            </div>
          </div>

         </div>`
})

