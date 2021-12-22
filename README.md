<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400"></a></p>

<p align="center">
<a href="https://travis-ci.org/laravel/framework"><img src="https://travis-ci.org/laravel/framework.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/dt/laravel/framework" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/v/laravel/framework" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/l/laravel/framework" alt="License"></a>
</p>

## About Vue
Vue.js is a progressive, incrementally-adoptable JavaScript framework for building UI on the web.
Here is the link to their documentation.
 
## Installing Vue.js
- **[Step 1]**
    ```npm insatll vue@next vue-router@next vue-loader@next```
    or you can run at separatly.
    ##    npm install vue@next   
    ```npm install vue-router@next```  
    ``` npm install vue-loader@next```
- **[Step 2]**
        in webpacke.mix.js change the 
    ```mix.js('resources/js/app.js', 'public/js')```
    to 
    ```mix.js('resources/js/app.js', 'public/js').vue().```
        
- **[Step 3]**
    Add id='app' to your blade vue where you want to render vue.js app.
    no in in app.js file add the following code.
```
    import {createApp} from 'vue' 
    createApp({  
    components: {}
    }).mount('#app');
``` 
## Router in Vue

- **[vue app directory structure]** <br/>
---resources <br/>
-----js <br/>
------components <br/>
---------companies <br/>
------------CompaniesIndex <br/>
------router <br/>
---------index.js <br/>
-----app.js <br/>

$ ./tree-md .
# Project tree

.
 * [tree-md](./tree-md)
 * [dir2](./dir2)
   * [file21.ext](./dir2/file21.ext)
   * [file22.ext](./dir2/file22.ext)
   * [file23.ext](./dir2/file23.ext)
 * [dir1](./dir1)
   * [file11.ext](./dir1/file11.ext)
   * [file12.ext](./dir1/file12.ext)
 * [file_in_root.ext](./file_in_root.ext)
 * [README.md](./README.md)
 * [dir3](./dir3)


- **[Step 1]**
`In This section we will set router.
in ```layout/app.blade.php``` add  ```id="app"``` to render vue.js.
```
        <div  id="app"> 
          <router-view/>   
        </div>
``` 

- **[Step 2]**
- **[Step 3]**
- **[Step 4]**

## License

The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
