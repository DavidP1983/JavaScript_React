'use strict';

//*******************************Promise*******************************//


                    //Simple CallBack async function//

/*console.log('Data Request');

setTimeout(() => {
    //Getting data
    console.log('Data Preparation...');
    const product = {
        name: 'TV',
        price: 4000
    };

    //Perform data
    setTimeout(() => {
        product.status = 'order';
        console.log(product);
    }, 2000);

}, 2000);*/

                                        //Promise//

/*console.log('Data Request');

const req = new Promise(function(resolve, reject){
setTimeout(() => {
    //Getting data
    console.log('Data Preparation...');
    const product = {
        name: 'TV',
        price: 4000
    };

    resolve();

    req.then(() =>{
console.log('Data has been got');
    });

}, 2000);

});*/



/*console.log('Data Request');

const req = new Promise(function(resolve, reject){
setTimeout(() => {
    //Getting data
    console.log('Data Preparation...');
    const product = {
        name: 'TV',
        price: 4000
    };

    resolve(product); //return

}, 2000);
});

req.then((product) =>{ // get data
    setTimeout(() => {
        product.status = 'order';
        console.log(product);
    }, 2000);
});*/



/*console.log('Data Request');

const req = new Promise(function (resolve, reject) {
    setTimeout(() => {
        //Getting data
        console.log('Data Preparation...');
        const product = {
            name: 'TV',
            price: 4000
        };

        resolve(product); //return

    }, 2000);
});

req.then((product) => { // get data
    const req2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            product.status = 'order';

            resolve(product);

        }, 2000);

    });
    req2.then(data => {
        console.log(data);
    });
});*/




/*console.log('Data Request');

const req = new Promise(function (resolve, reject) {
    setTimeout(() => {
        //Getting data
        console.log('Data Preparation...');
        const product = {
            name: 'TV',
            price: 4000
        };

        resolve(product); //return

    }, 2000);
});

req.then((product) => { // get data
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            product.status = 'order';

            resolve(product);

        }, 2000);

    }).then(data => {
        console.log(data);
    });
    
});*/



/*console.log('Data Request');

const req = new Promise(function (resolve, reject) {
    setTimeout(() => {
        //Getting data
        console.log('Data Preparation...');
        const product = {
            name: 'TV',
            price: 4000
        };

        resolve(product); //return

    }, 2000);
});

req.then((product) => { // get data
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            product.status = 'order';

            resolve(product);

        }, 2000);

    }).then(data => {
       product.modify = true;
       return data;
    }).then(data2 =>{
        console.log(data2);
    });
    
});*/



                                    //Reject//

/*console.log('Data Request');

const req = new Promise(function (resolve, reject) {
    setTimeout(() => {
        //Getting data
        console.log('Data Preparation...');
        const product = {
            name: 'TV',
            price: 4000
        };

        resolve(product); //return

    }, 2000);
});

req.then((product) => { // get data
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            product.status = 'order';

            reject();

        }, 2000);

    }).then(data => {
        product.modify = true;
        return data;
    }).then(data2 => {
        console.log(data2);
    }).catch(() =>{
        console.error('ERROR');
    });

});*/


                                    //FINALLY

/*console.log('Data Request');

const req = new Promise(function (resolve, reject) {
    setTimeout(() => {
        //Getting data
        console.log('Data Preparation...');
        const product = {
            name: 'TV',
            price: 4000
        };

        resolve(product); //return

    }, 2000);
});

req.then((product) => { // get data
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            product.status = 'order';

            resolve(product);

        }, 2000);

    }).then(data => {
        product.modify = true;
        return data;
    }).then(data2 => {
        console.log(data2);
    }).catch(() =>{
        console.error('ERROR');
    }).finally(() =>{
        console.log('Finally');
    });

});*/



                                //Method All / RACE

const test = time =>{
    return new Promise(resolve =>{
setTimeout(() => resolve(), time);
    });

};

// test(1000).then(() => console.log('Done in 1000ms'));
// test(2000).then(() => console.log('Done in 2000ms'));

//Promise.all

// Promise.all([test(1000), test(2000)]).then(() =>{
// console.log('All Done');
// });


Promise.race([test(1000), test(2000)]).then(() =>{
    console.log('All Done');
    });
    