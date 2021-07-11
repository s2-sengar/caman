 
// --------------Carousal-----------------
 
{
    new Glider(document.querySelector('.glider'), {
        slidesToShow: 4.5,
        slidesToScroll: 2,
        draggable: true,
        arrows: {
        prev: '.glider-prev',
        next: '.glider-next'
        },
        responsive:[
            {
                breakpoint:410,
                settings:{
                    slidesToShow:1.2,
                    slidesToScroll:1
                }
            },
            {
                breakpoint:500,
                settings:{
                    slidesToShow:2,
                    slidesToScroll:1
                }
            },
            {
                breakpoint:640,
                settings:{
                    slidesToShow:2.5,
                    slidesToScroll:1
                }
            },
            {
                breakpoint:700,
                settings:{
                    slidesToShow:3,
                    slidesToScroll:1.5
                }
            },
            {
                breakpoint:800,
                settings:{
                    slidesToShow:3.7,
                    slidesToScroll:1.5
                }
            },
            {
                breakpoint:910,
                settings:{
                    slidesToShow:4,
                    slidesToScroll:1.5
                }
            },
            {
                breakpoint:920,
                settings:{
                    slidesToShow:4.5,
                    slidesToScroll:1.5
                }
            }
            
        ]
    });
}

//---------------Loader-----------------

{
    window.addEventListener('load',()=>{
        const loader=document.querySelector('.pre-loader');
        loader.style.display='none';
    }); 
}
 
// --------------Main Canvas--------------------
 
{
    const canvas = document.querySelector('.upload__canvas');
    const uploadFile= document.querySelector('.upload--file');
    const downloadFile = document.querySelector('.btn--download');
    const clear = document.querySelector('.btn--clear');
    const uploadBtn=document.querySelector('.upload--wrapper');
    const deleteImg=document.querySelector('.btn--delete');

    const ctx = canvas.getContext('2d');

    let img=new Image();
    let fileName="";

    // handling file upload

    uploadFile.addEventListener('change',()=>{
        // getFile
        const file=document.querySelector('.upload--file').files[0];
        // initializeFileReader
        const reader=new FileReader();
        if(file){
            // setFileName
            fileName=file.name;
            // readDataAsURL
            reader.readAsDataURL(file);
        }
        // addImageToCanvas
        reader.addEventListener('load',()=>{
            const uploadBtn=document.querySelector('.upload--wrapper');
            uploadBtn.style.display='none';
            img=new Image();
            // setImageSrc
            img.src=reader.result;
            //onImageLoadAddToCanvas
            img.onload=function(){
                deleteImg.style.opacity='1';
                canvas.width=img.width;
                canvas.height=img.height;
                ctx.drawImage(img,0,0,img.width,img.height);
                canvas.removeAttribute('data-caman-id');
            }
        },false);
    });

    // filters and Effects
    document.addEventListener('click',(e)=>{
        const target=e.target.classList;
        if(target.contains('filter-btn')){
            if(target.contains('btn--filters')){
                Caman('#canvas',img,function(){
                    this.revert();
                })
            }
            if(target.contains('vintage-add')){
                Caman('#canvas',img,function(){
                    // this.revert();
                    this.vintage().render(function () {
                        // do something
                    });
                });
            }else if(target.contains('lomo-add')){
                Caman('#canvas',img,function(){
                    this.lomo().render();
                });
            }else if(target.contains('clarity-add')){
                Caman('#canvas',img,function(){
                    this.clarity().render();
                });
            }else if(target.contains('sincity-add')){
                Caman('#canvas',img,function(){
                    this.sinCity().render();
                });
            }else if(target.contains('sunrise-add')){
                Caman('#canvas',img,function(){
                    this.sunrise().render();
                });
            }else if(target.contains('orangepeel-add')){
                Caman('#canvas',img,function(){
                    this.orangePeel().render();
                });
            }else if(target.contains('love-add')){
                Caman('#canvas',img,function(){
                    this.love().render();
                });
            }else if(target.contains('grungy-add')){
                Caman('#canvas',img,function(){
                    this.grungy().render();
                });
            }else if(target.contains('jarques-add')){
                Caman('#canvas',img,function(){
                    this.jarques().render();
                });
            }else if(target.contains('pinhole-add')){
                Caman('#canvas',img,function(){
                    this.pinhole().render();
                });
            }else if(target.contains('oldboot-add')){
                Caman('#canvas',img,function(){
                    this.oldBoot().render();
                });
            }else if(target.contains('glowingsun-add')){
                Caman('#canvas',img,function(){
                    this.glowingSun().render();
                });
            }else if(target.contains('hazydays-add')){
                Caman('#canvas',img,function(){
                    this.hazyDays().render();
                });
            }else if(target.contains('hermajesty-add')){
                Caman('#canvas',img,function(){
                    this.herMajesty().render();
                });
            }else if(target.contains('nostalgia-add')){
                Caman('#canvas',img,function(){
                    this.nostalgia().render();
                });
            }else if(target.contains('concentrate-add')){
                Caman('#canvas',img,function(){
                    this.concentrate().render();
                });
            }else if(target.contains('brightness-remove')){
                Caman('#canvas',img,function(){
                    this.brightness(-5).render();
                });
            }else if(target.contains('brightness-add')){
                Caman('#canvas',img,function(){
                    this.brightness(5).render();
                });
            }else if(target.contains('contrast-remove')){
                Caman('#canvas',img,function(){
                    this.contrast(-5).render();
                });
            }else if(target.contains('contrast-add')){
                Caman('#canvas',img,function(){
                    this.contrast(5).render();
                });
            }else if(target.contains('saturation-remove')){
                Caman('#canvas',img,function(){
                    this.saturation(-5).render();
                });
            }else if(target.contains('saturation-add')){
                Caman('#canvas',img,function(){
                    this.saturation(5).render();
                });
            }else if(target.contains('vibrance-remove')){
                Caman('#canvas',img,function(){
                    this.vibrance(-5).render();
                });
            }else if(target.contains('vibrance-add')){
                Caman('#canvas',img,function(){
                    this.vibrance(5).render();
                });
            }else if(target.contains('exposure-remove')){
                Caman('#canvas',img,function(){
                    this.exposure(-5).render();
                });
            }else if(target.contains('exposure-add')){
                Caman('#canvas',img,function(){
                    this.exposure(5).render();
                });
            }else if(target.contains('hue-remove')){
                Caman('#canvas',img,function(){
                    this.hue(-5).render();
                });
            }else if(target.contains('hue-add')){
                Caman('#canvas',img,function(){
                    this.hue(5).render();
                });
            }
        }
    });
    // clearing all filters
    clear.addEventListener('click',()=>{
        Caman('#canvas',img,function(){
            this.revert();
        })
    })

    // download Image
    downloadFile.addEventListener('click',(e)=>{
        // gettingFileExtention
        const fileExt=fileName.slice(-4); //.jpg/.png
        // 
        let newFileName;
        if(fileExt==='.jpg' || fileExt==='.png'){
            newFileName=fileName.substring(0,fileName.length-4)+'-caman-s2s'+fileExt;
        }
        if(fileName){
            downloadImg(canvas,newFileName);
        }
    });

    // removeImageFromCanvas
    deleteImg.addEventListener('click',()=>{
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        uploadBtn.style.display='block';
        deleteImg.style.opacity='0';
    })

    function downloadImg(canvas,fileName){
        // initilizingEvent
        let e;
        // creating link and setting its properties
        const link=document.createElement('a');
        link.download=fileName;
        link.href=canvas.toDataURL('image/jpeg',0.8);
        // assigning event to a new mouse event and dispaching it
        e= new MouseEvent('click');
        link.dispatchEvent(e);
    }
}