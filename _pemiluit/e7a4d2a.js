/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{579:function(o,t){t.read=function(o,t,w,h,r){var M,n,f=8*r-h-1,e=(1<<f)-1,N=e>>1,c=-7,i=w?r-1:0,d=w?-1:1,s=o[t+i];for(i+=d,M=s&(1<<-c)-1,s>>=-c,c+=f;c>0;M=256*M+o[t+i],i+=d,c-=8);for(n=M&(1<<-c)-1,M>>=-c,c+=h;c>0;n=256*n+o[t+i],i+=d,c-=8);if(0===M)M=1-N;else{if(M===e)return n?NaN:1/0*(s?-1:1);n+=Math.pow(2,h),M-=N}return(s?-1:1)*n*Math.pow(2,M-h)},t.write=function(o,t,w,h,r,M){var n,f,e,N=8*M-r-1,c=(1<<N)-1,d=c>>1,rt=23===r?Math.pow(2,-24)-Math.pow(2,-77):0,i=h?0:M-1,l=h?1:-1,s=t<0||0===t&&1/t<0?1:0;for(t=Math.abs(t),isNaN(t)||t===1/0?(f=isNaN(t)?1:0,n=c):(n=Math.floor(Math.log(t)/Math.LN2),t*(e=Math.pow(2,-n))<1&&(n--,e*=2),(t+=n+d>=1?rt/e:rt*Math.pow(2,1-d))*e>=2&&(n++,e/=2),n+d>=c?(f=0,n=c):n+d>=1?(f=(t*e-1)*Math.pow(2,r),n+=d):(f=t*Math.pow(2,d-1)*Math.pow(2,r),n=0));r>=8;o[w+i]=255&f,i+=l,f/=256,r-=8);for(n=n<<r|f,N+=r;N>0;o[w+i]=255&n,i+=l,n/=256,N-=8);o[w+i-l]|=128*s}}}]);