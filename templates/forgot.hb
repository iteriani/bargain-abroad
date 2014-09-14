<div class="register container">

    <h1>Forgot Password?</h1>

    <form role="form" {{ action submit on="submit" }}>

        <div class="form-group">
            <label for="inputEmailAddress">Email address</label>
            <div class="input-group input-group-lg">
                <span class="input-group-addon"><span class="glyphicon glyphicon-envelope"></span></span>
                {{input type="email" class="form-control" id="inputEmailAddress" value=email placeholder="Email address"}}
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