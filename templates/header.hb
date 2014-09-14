<nav class="navbar navbar-inverse navbar-fixed-top header">
    <div class="container">

        <div class="navbar-header">
            {{# if user}}
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
            {{/if}}
            <a class="navbar-brand" href="#"><small>Bargain Abroad</small></a>

            {{#unless user}}
            <div class="pull-right visible-xs">
                {{#link-to "login" class="btn btn-success navbar-btn"}}Login{{/link-to}}
                {{#link-to "register" class="btn btn-primary navbar-btn"}}Register{{/link-to}}
            </div>
            {{/unless}}
        </div>

        {{#unless user}}
        <div class="navbar-right hidden-xs">
            {{#link-to "login" class="btn btn-success navbar-btn"}}Login{{/link-to}}
            {{#link-to "register" class="btn btn-primary navbar-btn"}}Register{{/link-to}}
        </div>
        {{/unless}}

        <div class="collapse navbar-collapse">
            {{# if user}}
                <div class="pull-right">
                    <img {{ bind-attr src=user.thumbnail }}>
                    <div class="navbar-text">
                        <p>{{ user.imvu.avatarName }}</p>
                    </div>
                    <ul class="nav navbar-nav">
                        <li><a href="#account"><span class="glyphicon glyphicon-cog"></span> Account</a></li>
                        <li><a href="#activity"><span class="glyphicon glyphicon-time"></span> Activity</a></li>
                        <li><a href="#" {{ action logout }}><span class="glyphicon glyphicon-log-out"></span> Logout</a></li>
                    </ul>
                </div>
            {{/if}}
        </div>

    </div>
</nav>
