

// @ts-ignore
const getView = function(page:any){
    return () => import(`@/views/admin/${page}.vue`)
}


const adminRouter = [
    {
        path: '',
        name: 'home',
        component: getView('Home')
    },

    //**************************************จัดการผู้ใช้งาน****************************************//
    {
        path: 'manageuser',
        name: 'manageuser',
        component: getView('ManageUser')
    },
    {
        path: 'profileuser',
        name: 'profileuser',
        component: getView('ProfileUser')
    },
    {
        path: 'adduser',
        name: 'adduser',
        component: getView('AddUser')
    },

    //**************************************จัดการแอดมิน****************************************//
    {
        path: 'manageadmin',
        name: 'manageadmin',
        component: getView('ManageAdmin')
    },
    {
        path: 'profileadmin',
        name: 'profileadmin',
        component: getView('ProfileAdmin')
    },
    {
        path: 'addadmin',
        name: 'addadmin',
        component: getView('AddAdmin')
    },

    //**************************************จัดการสถานที่****************************************//
    {
        path: 'manageplace',
        name: 'manageplace',
        component: getView('ManagePlace')
    },
    {
        path: 'profileplace',
        name: 'profileplace',
        component: getView('ProfilePlace')
    },
    {
        path: 'addplace',
        name: 'addplace',
        component: getView('AddPlace')
    },
    //**************************************จัดการประกาศ****************************************//
    {
        path: 'managepost',
        name: 'managepost',
        component: getView('ManagePost')
    },
    {
        path: 'profilepost',
        name: 'profilepost',
        component: getView('ProfilePost')
    },
    //**************************************คำขอเปลี่ยนรหัสผ่าน****************************************//
    {
        path: 'passwordreq',
        name: 'passwordreq',
        component: getView('PasswordReq')
    }, 
    //**************************************รายงาน****************************************//
    {
        path: 'reportuser',
        name: 'reportuser',
        component: getView('ReportUser')
    }, 
    {
        path: 'reportpost',
        name: 'reportpost',
        component: getView('ReportPost')
    }, 
    {
        path: 'reportplace',
        name: 'reportplace',
        component: getView('ReportPlace')
    }, 
    {
        path: 'reportstatic',
        name: 'reportstatic',
        component: getView('ReportStatic')
    }, 
]

export   {
    adminRouter
}