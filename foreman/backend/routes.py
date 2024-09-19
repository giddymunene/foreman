from flask import Blueprint, jsonify, request

main_routes = Blueprint('main_routes', __name__)

# Sample route to test connection
@main_routes.route('/api/healthcheck', methods=['GET'])
def health_check():
    return jsonify({"status": "Backend is running"}), 200

# Sample route to handle costs data
@main_routes.route('/api/costs', methods=['POST'])
def calculate_costs():
    data = request.get_json()
    # Extract data from the request
    cost = data.get('cost')
    currency = data.get('currency')

    # Add your logic to process the cost here
    # For example, handling different currencies
    converted_cost = cost  # Example: assuming no conversion for now

    return jsonify({"converted_cost": converted_cost}), 200
