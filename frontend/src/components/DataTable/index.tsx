const DataTable = () => {
    return (
        <div className="table-responsive">
            <table className="table table-striped table-sm">
                <thead>
                    <tr>
                        <th>Data</th>
                        <th>Vendedor</th>
                        <th>Clientes visitados</th>
                        <th>Negócios fechados</th>
                        <th>Valor</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>22/04/2021</td>
                        <td>Barry Allen</td>
                        <td>34</td>
                        <td>25</td>
                        <td>15.017,00</td>
                    </tr>

                    <tr>
                        <td>24/04/2021</td>
                        <td>José</td>
                        <td>34</td>
                        <td>25</td>
                        <td>14.017,00</td>
                    </tr>

                    <tr>
                        <td>23/04/2021</td>
                        <td>Alfredo</td>
                        <td>35</td>
                        <td>22</td>
                        <td>12.500,00</td>
                    </tr>

                    <tr>
                        <td>21/04/2021</td>
                        <td>Abigail</td>
                        <td>38</td>
                        <td>26</td>
                        <td>20.000,00</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default DataTable;