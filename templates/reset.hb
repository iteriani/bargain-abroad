<div class="register container">

    <h1>Reset Password</h1>

    <form role="form" {{ action submit on="submit" }}>

        <div class="form-group">
            <label for="inputToken">Token</label>
            <div class="input-group input-group-lg">
                <span class="input-group-addon"><span class="glyphicon glyphicon-tag"></span></span>
                {{input type="text" class="form-control" id="inputToken" value=token placeholder="Enter a valid token" disabled=hasToken}}
            </div>
        </div>

        <div class="form-group">
            <label for="inputPass">New Password</label>
            <div class="input-group input-group-lg">
                <span class="input-group-addon"><span class="glyphicon glyphicon-lock"></span></span>
                {{input type="password" class="form-control" id="inputPass" value=pass placeholder="Enter your new password"}}
            </div>
        </div>

        <div class="form-group">
            <label for="inputPazz">Re-type Password</label>
            <div class="input-group input-group-lg">
                <span class="input-group-addon"><span class="glyphicon glyphicon-lock"></span></span>
                {{input type="password" class="form-control" id="inputPazz" value=pazz placeholder="Re-type your new password"}}
            </div>
        </div>

        {{#if errors}}
            <div class="form-group">
                <div class="alert alert-danger">
                    {{#each errors}}
                        <p>{{ this }}</p>
                    {{/each}}
                </div>
            </div>
        {{/if}}

        {{#if messages}}
            <div class="form-group">
                <div class="alert alert-info">
                    {{#each messages}}
                        <p>{{ this }}</p>
                    {{/each}}
                </div>
            </div>
        {{/if}}

        <button type="submit" class="btn btn-primary btn-lg" {{bind-attr disabled=loading}}>
            {{#if loading}}One moment...{{else}}Submit{{/if}}
        </button>
        <button type="button" class="btn btn-default btn-lg"
            {{ bind-attr disabled=loading }}
            {{ action cancel }}>Cancel
        </button>

    </form>

</div>