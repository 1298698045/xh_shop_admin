import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '首页', icon: 'dashboard' }
    }]
  },

  // {
  //   path: '/example',
  //   component: Layout,
  //   redirect: '/example/table',
  //   name: 'Example',
  //   meta: { title: 'Example', icon: 'el-icon-s-help' },
  //   children: [
  //     {
  //       path: 'table',
  //       name: 'Table',
  //       component: () => import('@/views/table/index'),
  //       meta: { title: 'Table', icon: 'table' }
  //     },
  //     {
  //       path: 'tree',
  //       name: 'Tree',
  //       component: () => import('@/views/tree/index'),
  //       meta: { title: 'Tree', icon: 'tree' }
  //     }
  //   ]
  // },

  // {
  //   path: '/form',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'index',
  //       name: 'Form',
  //       component: () => import('@/views/form/index'),
  //       meta: { title: 'Form', icon: 'form' }
  //     }
  //   ]
  // },

  // {
  //   path: '/nested',
  //   component: Layout,
  //   redirect: '/nested/menu1',
  //   name: 'Nested',
  //   meta: {
  //     title: 'Nested',
  //     icon: 'nested'
  //   },
  //   children: [
  //     {
  //       path: 'menu1',
  //       component: () => import('@/views/nested/menu1/index'), // Parent router-view
  //       name: 'Menu1',
  //       meta: { title: 'Menu1' },
  //       children: [
  //         {
  //           path: 'menu1-1',
  //           component: () => import('@/views/nested/menu1/menu1-1'),
  //           name: 'Menu1-1',
  //           meta: { title: 'Menu1-1' }
  //         },
  //         {
  //           path: 'menu1-2',
  //           component: () => import('@/views/nested/menu1/menu1-2'),
  //           name: 'Menu1-2',
  //           meta: { title: 'Menu1-2' },
  //           children: [
  //             {
  //               path: 'menu1-2-1',
  //               component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1'),
  //               name: 'Menu1-2-1',
  //               meta: { title: 'Menu1-2-1' }
  //             },
  //             {
  //               path: 'menu1-2-2',
  //               component: () => import('@/views/nested/menu1/menu1-2/menu1-2-2'),
  //               name: 'Menu1-2-2',
  //               meta: { title: 'Menu1-2-2' }
  //             }
  //           ]
  //         },
  //         {
  //           path: 'menu1-3',
  //           component: () => import('@/views/nested/menu1/menu1-3'),
  //           name: 'Menu1-3',
  //           meta: { title: 'Menu1-3' }
  //         }
  //       ]
  //     },
  //     {
  //       path: 'menu2',
  //       component: () => import('@/views/nested/menu2/index'),
  //       name: 'Menu2',
  //       meta: { title: 'menu2' }
  //     }
  //   ]
  // },

  // {
  //   path: 'external-link',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'https://panjiachen.github.io/vue-element-admin-site/#/',
  //       meta: { title: 'External Link', icon: 'link' }
  //     }
  //   ]
  // },
  {
    path: '/shop',
    component: Layout,
    redirect: '/shop/shop',
    name: 'Shop',
    meta: { title: '商品管理', icon: 'el-icon-shopping-bag-1' },
    children: [
      {
        path: 'shop',
        name: 'Shop',
        component: () => import('@/views/shop/shop'),
        meta: {
          title: '商品',
          icon: ''
        }
      },
      {
        path: 'addShop',
        name: 'AddShop',
        hidden: true,
        component: () => import('@/views/shop/shop/addProduct.vue'),
        meta: {
          title: '添加商品',
          icon: '',
          noCache: true,
          activeMenu: '/shop/shop'
        }
      },
      {
        path: 'shopClass',
        name: 'ShopClass',
        component: () => import('@/views/shop/shopClass'),
        meta: {
          title: '商品分类',
          icon: ''
        }
      },
      {
        path: 'editClass/:type',
        name: 'EditClass',
        hidden: true,
        component: () => import('@/views/shop/shopClass/editClass'),
        meta: {
          title: '编辑分类',
          icon: '',
          activeMenu: '/shop/shopClass'
        },
        beforeEnter: (to, from, next) => {
          console.log(to)
          if (to.params.type === 'add') {
            to.meta.title = '添加分类'
            document.title = '添加分类'
          } else {
            to.meta.title = '编辑分类'
            document.title = '编辑分类'
          }
          next()
        }
      },
      {
        path: 'attributeAdmin',
        name: 'AttributeAdmin',
        component: () => import('@/views/shop/attributeAdmin'),
        meta: {
          title: '属性管理',
          icon: ''
        },
        children: [
          {
            path: 'attribute',
            name: 'Attribute',
            component: () => import('@/views/shop/attributeAdmin/attribute'),
            meta: {
              title: '商品属性',
              icon: ''
            }
          },
          {
            path: 'specs',
            name: 'Specs',
            component: () => import('@/views/shop/attributeAdmin/attributeSpecs'),
            meta: {
              title: '规格',
              icon: ''
            }
          },
          {
            path: 'checkout',
            name: 'Checkout',
            component: () => import('@/views/shop/attributeAdmin/checkout'),
            meta: {
              title: '结账属性',
              icon: ''
            }
          }
        ]
      }
    ]
  },
  {
    path: '/afterSales',
    component: Layout,
    redirect: '/afterSales/myOrder',
    name: 'AfterSales',
    meta: { title: '售后管理', icon: 'el-icon-shopping-bag-1' },
    children: [
      {
        path: 'myOrder',
        name: 'MyOrder',
        component: () => import('@/views/afterSales/myOrder'),
        meta: { title: '我的订单' }
      },
      {
        path: 'previewOrder',
        name: 'PreviewOrder',
        hidden: true,
        component: () => import('@/views/afterSales/myOrder/previewOrder.vue'),
        meta: { title: '查看订单',
          breadcrumb: false
        }
      },
      {
        path: 'distribution',
        name: 'Distribution',
        component: () => import('@/views/afterSales/distribution'),
        meta: { title: '配送列表' }
      },
      {
        path: 'distributionDetail',
        name: 'DistributionDetail',
        hidden: true,
        component: () => import('@/views/afterSales/distribution/detail.vue'),
        meta: { title: '运单详情' }
      },
      {
        path: 'refundList',
        name: 'RefundList',
        component: () => import('@/views/afterSales/refundList'),
        meta: { title: '退货列表' }
      },
      {
        path: 'edit',
        name: 'EditRefundList',
        hidden: true,
        component: () => import('@/views/afterSales/refundList/edit.vue'),
        meta: { title: '编辑售后' }
      }
    ]
  },
  {
    path: '/orderList',
    component: Layout,
    redirect: '/orderList',
    children: [{
      path: 'orderList',
      name: 'OrderList',
      component: () => import('@/views/afterSales/orderList'),
      meta: { title: '订单列表', icon: 'el-icon-shopping-bag-1' }
    }, {
      path: 'detail',
      name: 'OrderDetail',
      hidden: true,
      component: () => import('@/views/afterSales/orderList/detail.vue'),
      meta: { title: '详情', noCache: true, activeMenu: '/orderList/orderList', breadcrumb: true }
    }]
  },
  {
    path: '/jurisdiction',
    component: Layout,
    redirect: '/jurisdiction',
    children: [
      {
        path: '/jurisdiction',
        name: 'Jurisdiction',
        component: () => import('@/views/jurisdiction'),
        meta: {
          title: '权限管理',
          icon: 'el-icon-user-solid'
        }
      }
    ]
  },
  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

export const asyncRouterMap = [
  {
    path: '/example',
    component: Layout,
    redirect: '/example/table',
    name: 'Example',
    meta: { title: 'Example', icon: 'el-icon-s-help' },
    roles: ['admin', 'editor'],
    children: [
      {
        path: 'table',
        name: 'Table',
        component: () => import('@/views/table/index'),
        meta: { title: 'Table', icon: 'table' }
      },
      {
        path: 'tree',
        name: 'Tree',
        component: () => import('@/views/tree/index'),
        meta: { title: 'Tree', icon: 'tree' }
      }
    ]
  },
  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  }
]

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
