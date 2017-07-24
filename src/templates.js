angular.module('enuo.grid', []).run(['$templateCache', function($templateCache) {$templateCache.put('enuo/grid/templates/emptyResult.html','<div class="row" ng-style="outStyle">\n    <div class="col-md-4 col-md-offset-4" ng-style="innerStyle">\n        <div class="media">\n            <div class="media-left">\n                <i style="font-size:42px;" ng-class="config.icon"></i>\n            </div>\n            <div class="media-body">\n                <h4 class="media-heading">{{ config.title }}</h4>\n                {{ config.intro }}\n            </div>\n        </div>\n    </div>\n</div>');
$templateCache.put('enuo/grid/templates/enuoGrid.html','<div class="enuo-grid">\n    <div class="box-tool clearfix">\n        <div class="btn-group" ng-if="config.tool">\n            <button ng-repeat="item in config.tool.items" type="button" ng-click="item.click(selectedList)" class="btn btn-default" ng-class="item.cssClass">\n                <i ng-class="item.icon"></i> {{item.name}}\n            </button>\n        </div>\n        <div class="pull-right" ng-if="config.query">\n            <form class="form-inline">\n                <div class="input-group">\n                    <div class="pull-left" ng-repeat="item in config.query.items">\n                        <div ng-if="item.type==\'select\'" class="input-group-btn">\n                            <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\n                                 {{ item.display }} \n                                 <span class="caret"></span>\n                            </button>\n                            <ul class="dropdown-menu">\n                                <li ng-repeat="option in item.options" ng-click="fnSelectQuery(option,item)">\n                                    <a>{{option.name}}</a>\n                                </li>\n                            </ul>\n                        </div>\n                        <input ng-if="item.type==\'input\'" type="text" ng-model="item.value" class="form-control" placeholder="{{item.placeholder}}" />\n                        <input ng-if="item.type==\'hideen\'" type="hidden" ng-model="item.value" />\n                    </div>\n                    <span class="input-group-btn pull-left">\n                        <button type="submit" ng-click="fnQuery()" class="btn btn-primary">\n                            <i class="glyphicon glyphicon-search"></i>\n                            {{config.query.action.title || \'\u641C\u7D22\'}}\n                        </button>\n                    </span>\n                </div>\n            </form>\n        </div>\n    </div>\n    <table class="table table-bordered table-hover">\n        <thead>\n            <tr>\n                <th style="width:10px;"><input type="checkbox" ng-model="checkAll" ng-click="fnCheckAll()"></th>\n                <th ng-repeat="column in config.columns" ng-style="{width:column.width?column.width:\'auto\'}">{{column.name}}</th>\n            </tr>\n        </thead>\n        <tbody ng-if="!config.loading && gridSource.length > 0">\n            <tr ng-repeat="item in gridSource" ng-click="fnCheckItem(item)">\n                <td>\n                    <input type="checkbox" ng-checked="fnItemChecked(item)">\n                </td>\n                <td ng-repeat="column in config.columns">\n                    <enuo-grid-cell column="column" item="item"></enuo-grid-cell>\n                </td>\n            </tr>\n        </tbody>\n        <tbody ng-if="!config.loading && gridSource.length <= 0">\n            <tr>\n                <td colspan="{{config.columns.length + 1}}">\n                    <empty-result></empty-result>\n                </td>\n            </tr>\n        </tbody>\n        <tbody ng-if="config.loading">\n            <tr>\n                <td colspan="{{config.columns.length + 1}}">\n                    <empty-result em-style="loading"></empty-result>\n                </td>\n            </tr>\n        </tbody>\n    </table>\n    <div class="box-footer" ng-if="config.page">\n        <paging page="config.page.pageIndex" class="pull-right paging" page-size="config.page.pageSize" total="config.page.total" paging-action="config.page.callback(page)" show-prev-next="true" show-first-last="true">\n        </paging>\n    </div>\n</div>');}]);