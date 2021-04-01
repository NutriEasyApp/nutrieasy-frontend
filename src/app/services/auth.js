export function Signin(){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                token: 'ALeKk02G0qQyeFUIPxUx1xiaaCNsi_e2Yew',
                user: {
                    name: 'Gabriel',
                    email: 'dev.gabriel.alonso@gmail.com'
                }
            })
        }, 2000);
    })
}