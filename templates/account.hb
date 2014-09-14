<div class="container account">

    <h1>My Account</h1>

    <div class="panel panel-primary">
        <div class="panel-heading">
            <strong>Account Information</strong>
        </div>
        <div class="panel-body">
            <div class="row">
                <div class="col-xs-12 col-sm-2">
                    <img class="thumbnail" {{ bind-attr src=user.thumbnail }} />
                </div>
                <div class="col-xs-12 col-sm-10">
                    <dl class="dl-horizontal">
                        {{#if user.email}}
                            <dt>Email Address</dt>
                            <dd>{{ user.email }}</dd>
                        {{/if}}
                    </dl>
                </div>
            </div>
        </div>
    </div>

</div>
