

// @ts-ignore
const getView = function(page:any){
    return () => import(`@/views/root/${page}.vue`)
}


const rootRouter = [
    {
        path: '',
        name: 'admin-home',
        component: getView('Home')
    },
    
]


export  {
    rootRouter
}