angular
  .module('whatsapp')
  .config(config);

  function config($stateProvider, $urlRouterProvider){
    $stateProvider
      .state('tab',{
        url:'/tab',
        abstract: true,
        templateUrl: 'client/templates/tabs.html'
      })
      .state('tab.chats',{
        url:'/chats',
        view:{
          'tab-chats':{
            templateUrl: 'client/templates/chats.html'
          }
        }
      });
      $urlRouterProvider.otherwise('tab/chats');
  }
